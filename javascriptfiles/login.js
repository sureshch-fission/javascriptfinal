"use strict";
"use strict";
//elements
const inputValueemail = document.getElementById("email");
const inputValuepassword = document.getElementById("password");
const form = document.getElementById("form");
const submitbutton = document.getElementById("submitbutton");

//Fetching data from an API and Form validation

const submit = async () => {
  const data = await fetch(
    "https://6193976ed3ae6d0017da86a1.mockapi.io/api/user_profile"
  );
  const userdata = await data.json();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    userdata.forEach((data) => {
      if (
        inputValueemail.value === data.username &&
        inputValuepassword.value === data.password
      ) {
        alert("login success");
        window.location.href = "food.html";
      }
      if (
        inputValueemail.value === data.username &&
        inputValuepassword.value === data.password
      ) {
        localStorage.setItem("loginData", inputValueemail.value);
      }
      if (
        inputValueemail.value !== data.username &&
        inputValuepassword.value !== data.password
      ) {
        alert("incorrect username or password");
      }
    });
  });
};
submit();
