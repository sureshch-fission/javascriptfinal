"use strict";

const button = document.getElementsByTagName("button");
const item = document.querySelector(".item");
const recipesDiv = document.querySelector(".recipes");

const products = [
  {
    image: "./images/gobimanchuria.jpg",
    Name: "Gobi Manchuria",
    price: 150,
    inCart: 0,
  },
  {
    image: "./images/vegmanchuria.jpg",
    Name: "Veg Manchuria",
    price: 150,
    inCart: 0,
  },
  {
    image: "./images/chillipaneer.jpg",
    Name: "Veg Biryani",
    price: 50,
    inCart: 0,
  },
  {
    image: "./images/vada.jpg",
    Name: "vada",
    price: 50,
    inCart: 0,
  },
];

//To fetch products and add
const recipesrender = async () => {
  products.forEach((product) => {
    item.innerHTML += `
      <div class="veg-recipes resturant">
         <div class='recipes'>
         <img src=${product.image}></img>
        <h4>${product.Name}</h4>
        <h5><i class="far fa-rupee-sign"></i>${product.price}</h5>
        <a class="addtocart " href='#' >Add to cart</a>
        
    </div>
    </div>`;
  });

  const Carts = document.querySelectorAll(".addtocart");

  for (let i = 0; i < Carts.length; i++) {
    Carts[i].addEventListener("click", () => {
      cartItems(products[i]);
      totalCost(products[i]);
      alert(`Item Added`);
    });
  }
};
recipesrender();

const cartnumber = document.querySelector(".cart span");
console.log(cartnumber);

const cartItems = (product) => {
  let itemNumbers = JSON.parse(localStorage.getItem("itemNumber"));

  itemNumbers = parseInt(itemNumbers);
  if (itemNumbers) {
    localStorage.setItem("itemNumber", JSON.stringify(itemNumbers + 1));
    //cartnumber.innerHTML +=  itemNumbers + 1;
  } else {
    localStorage.setItem("itemNumber", 1);
  }
  setItems(product);
};

const setItems = (product) => {
  let cartItems = JSON.parse(localStorage.getItem("products"));
  console.log(cartItems);

  if (cartItems != null) {
    if (cartItems[product.inCart] == undefined) {
      cartItems = {
        ...cartItems,
        [product.Name]: product,
      };
    }
    cartItems[product.Name].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.Name]: product,
    };
  }

  localStorage.setItem("products", JSON.stringify(cartItems));
};

function totalCost(product) {
  console.log(product.price);

  let totalcost = localStorage.getItem("totalCost");
  if (totalcost != null) {
    totalcost = parseInt(totalcost);
    localStorage.setItem("totalCost", totalcost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

let itemNumbers = JSON.parse(localStorage.getItem("itemNumber"));
if (itemNumbers !== null) {
  document.querySelector(".cart span").innerHTML += `${itemNumbers}`;
}
if (itemNumbers === null) {
  document.querySelector(".cart span").innerHTML += "";
}
