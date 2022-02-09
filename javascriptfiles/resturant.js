"use strict";

const resturantNames = document.querySelector(".resturantNames");

//Add restuarants

const Resturantrender = async () => {
  const fetchData = await fetch(
    "https://6193976ed3ae6d0017da86a1.mockapi.io/api/restaurants"
  );
  const resturantData = await fetchData.json();
  console.log(resturantData);

  resturantData.forEach((resturant) => {
    resturantNames.innerHTML += `
    <div class="resturant1">
    <img  class='img' src="${resturant.img}"/>
    <h2>${resturant.name}</h2>
    <ul>
    <h5>${resturant.foodType}</h5>
    <h6><i class="fas fa-star star"></i>${resturant.ratings}</h6>
    <h6>5000+ ratings</h6>
    </ul>
    ${
      resturant.name === "magnam"
        ? `<a class="recipelink" href="recipes2.html">View recipes</a>`
        : `<a class="recipelink" href="recipes.html">View recipes</a>`
    }
   
</div>`;
  });
};
Resturantrender();

//cartItems

let itemNumbers = JSON.parse(localStorage.getItem("itemNumber"));
if (itemNumbers !== null) {
  document.querySelector(".cart span").innerHTML += `${itemNumbers}`;
}
if (itemNumbers === null) {
  document.querySelector(".cart span").innerHTML += "";
}
