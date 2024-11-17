/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let signup_link = document.querySelector(".signup-link");
let login_link = document.querySelector(".login-link");

signup_link.addEventListener("click", () => {
  wrapper.classList.add("active");
});

login_link.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
