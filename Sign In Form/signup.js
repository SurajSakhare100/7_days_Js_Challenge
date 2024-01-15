let email = document.getElementById("emailId");
let username = document.getElementById("username");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let birthday = document.getElementById("birthday");
let form2 = document.getElementById("form2");
const year = new Date();
const curr_year = year.getFullYear();
form2.onsubmit = (e) => {
  e.preventDefault();
  if ((parseInt(birthday.value.slice(0,4))+ 18 ) > curr_year) {
    alert("your not adult! this site is for adult!");
  }
  else{
      localStorage.setItem("email", email.value);
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);
      location.href = "SignIn.html";
  }
};
