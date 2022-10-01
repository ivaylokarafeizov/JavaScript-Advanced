function getArticleGenerator(articles) {
  let div = document.getElementById('content');

  return function showNext() {
    if (articles.length) {
      let articleText = articles.shift();
      let article = document.createElement('article');
      article.textContent = articleText;
      div.appendChild(article);
    }
  };
}
