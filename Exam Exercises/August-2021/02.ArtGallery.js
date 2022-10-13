class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();

    if (!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw new Error('This article model is not included in this gallery!');
    }

    let article = this.listOfArticles.find((e) => e.articleName == articleName);

    if (!article) {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    } else {
      article.quantity += quantity;
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    if (this.guests.find((e) => e.guestName == guestName)) {
      throw new Error(`${guestName} has already been invited.`);
    }

    let points = 0;
    if (personality == 'Vip') {
      points = 500;
    } else if (personality == 'Middle') {
      points = 250;
    } else {
      points = 50;
    }
    this.guests.push({ guestName, points, purchaseArticle: 0 });
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let article = this.listOfArticles.find((e) => e.articleName == articleName);

    if (!article || article.articleModel != articleModel) {
      throw new Error('This article is not found.');
    }

    if (article.quantity == 0) {
      return `The ${articleName} is not available.`;
    }

    let guest = this.guests.find((e) => e.guestName == guestName);

    if (!guest) {
      return 'This guest is not invited.';
    }

    let articlePts = this.possibleArticles[articleModel];
    if (guest.points >= articlePts) {
      guest.points -= articlePts;
      article.quantity--;
      guest.purchaseArticle++;
    } else {
      return 'You need to more points to purchase the article.';
    }
    return `${guestName} successfully purchased the article worth ${articlePts} points.`;
  }

  showGalleryInfo(criteria) {
    let result = [];
    if (criteria == 'article') {
      result.push('Articles information:');
      this.listOfArticles.forEach((e) =>
        result.push(`${e.articleModel} - ${e.articleName} - ${e.quantity}`)
      );
    } else if (criteria == 'guest') {
      result.push('Guests information:');
      this.guests.forEach((e) =>
        result.push(`${e.guestName} - ${e.purchaseArticle}`)
      );
    }
    return result.join('\n');
  }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
