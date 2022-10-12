function posts() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let superString = super.toString();
      let rating = this.likes - this.dislikes;

      if (this.comments.length > 0) {
        let commentsToPrint = '';
        for (let comment of this.comments) {
          commentsToPrint += `\n * ${comment}`;
        }

        return `${superString}\nRating: ${rating}\nComments:${commentsToPrint}`;
      } else {
        return `${superString}\nRating: ${rating}`;
      }
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      let superString = super.toString();
      return superString + `\nViews: ${this.views}`;
    }
  }

  return { Post, SocialMediaPost, BlogPost };
}

const classes = posts();
let post = new classes.Post('Post', 'Content');

console.log(post.toString());

let scm = new classes.SocialMediaPost('TestTitle', 'TestContent', 25, 30);

scm.addComment('Good post');
scm.addComment('Very good post');
scm.addComment('Wow!');

console.log(scm.toString());
