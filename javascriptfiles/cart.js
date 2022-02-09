"use strict";

//Elements
const cartItem = document.querySelector(".cartItems");
const table2 = document.querySelector(".table2");
const cart2 = document.querySelector(".cart2");
console.log(cart2);

//Cart function to Display cart Items
let cartproducts = JSON.parse(localStorage.getItem("products"));
const itemNumber = JSON.parse(localStorage.getItem("itemNumber"));
console.log(itemNumber);

const cart = function () {
  if (cartproducts !== null) {
    Object.values(cartproducts).map((cart) => {
      cartItem.innerHTML += `
      <div class='product-container'>
      <i class="fas fa-dot-circle dotcircle"></i>
      <div class='product productdetail'>
        <h6>${cart.Name}</h6>
        <img src='${cart.image}'>
      </div>
      <div class='product  productdetail'>
      <h6> ${cart.inCart}</h6>
      </div>
      <div class='product  productdetail'>
      <h6><i class="fas fa-rupee-sign"> </i>${cart.inCart * cart.price}</h6>
      </div>
    
      </div>
       `;
    });
  } else {
    cartproducts = {};
  }
};
cart();

//Subtotal function

function subtotal() {
  const subtotal = document.querySelector(".subtotal");
  let totalamount = JSON.parse(localStorage.getItem("totalCost"));

  if (totalamount === null) {
    subtotal.innerHTML += "";
  } else {
    subtotal.innerHTML += `<h5><i class="fas fa-rupee-sign">${totalamount}</h5>`;
  }
}
subtotal();

//adding cartItem numbers
function cartItemnumbers() {
  let itemNumbers = JSON.parse(localStorage.getItem("itemNumber"));
  if (itemNumbers !== null) {
    document.querySelector(".cart span").innerHTML += `${itemNumbers}`;
  }
  if (itemNumbers === null) {
    document.querySelector(".cart span").innerHTML += "";
  }
}
cartItemnumbers();

const removeItem = document.querySelector(".removeitem");
