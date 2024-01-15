let email = document.getElementById("emailId");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let form1 = document.getElementById("form1");
let myEmail='admin@gmail.com'
let myPassword='password123';

if(localStorage.getItem('email')!=null){
  myEmail=localStorage.getItem('email')
}
if(localStorage.getItem('password')!=null){
    myPassword=localStorage.getItem('password')
}
form1.onsubmit = (e) => {
  e.preventDefault();
  if (email.value == myEmail && password.value == myPassword) {
    alert("welcome back admin!");
    location.href='admin.html';
  } else if (email.value != myEmail) {
    alert("username not matched");
  } else if (password.value != myPassword) {
    alert("password not matched");
  } else {
  }
};
