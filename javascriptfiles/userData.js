"use strict";

const btnsOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
console.log(btnsOpenModal);
const userName = document.querySelector(".show-modal span");
console.log(userName);

const userAccount = async () => {
  const data = await fetch(
    `https://6193976ed3ae6d0017da86a1.mockapi.io/api/user_profile`
  );
  const data1 = await data.json();

  let logindata = localStorage.getItem("loginData");

  data1.forEach((userdata) => {
    if (logindata === userdata.username) {
      userName.innerHTML += `${userdata.name}`;
    }

    if (logindata === userdata.username) {
      modal.innerHTML += `
      <div class='userdetails'>
          <h1>Welcome ${userdata.name} !</h1>
          <h5>Address : ${userdata.address}</h5>
          <h5> Phone : 99534657</h5>
          <h5>card Details : Ac-SBH1234567</h5>
      </div>
           <a href="index.html" class="logout accountlogout"><i class="far fa-sign-out-alt"></i>Logout</a>
          `;
    }
  });
};
userAccount();

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

const logout = document.querySelector(".accountlogout");
//logout
if (logout !== null) {
  logout.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
  });
}
