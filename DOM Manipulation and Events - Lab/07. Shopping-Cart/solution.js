function solve() {
  let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
  let result = document.querySelector('textarea');
  let checkoutDone = false;

  let products = [];
  let totalPrice = 0;
  shoppingCart.addEventListener('click', function (event) {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    if (checkoutDone) {
      return;
    }

    let btn = event.target;

    if (Array.from(btn.classList).indexOf('add-product') >= 0) {
      let productElement = event.target.parentElement.parentElement;
      let name =
        productElement.querySelectorAll('.product-title')[0].textContent;
      let price = Number(
        productElement.querySelectorAll('.product-line-price')[0].textContent
      );

      result.textContent += `Added ${name} for ${price
        .toFixed(2)} to the cart.\n`;

      if (products.indexOf(name) < 0) {
        products.push(name);
      }

      totalPrice += price;
    } else if (Array.from(btn.classList).indexOf('checkout') >= 0) {
      result.textContent += `You bought ${products
        .join(', ')} for ${totalPrice.toFixed(2)}.`;
      checkoutDone = true;
    }
  });
}
