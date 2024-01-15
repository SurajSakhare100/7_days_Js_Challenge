let email = document.getElementById("emailId");
let con_password = document.getElementById("con_password");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let form3 = document.getElementById("form3");
let myEmail='admin@gmail.com'
let myPassword='password123';

if(localStorage.getItem('email')!=null){
  myEmail=localStorage.getItem('email')
}
if(localStorage.getItem('password')!=null){
    myPassword=localStorage.getItem('password')
}
form3.onsubmit = (e) => {
  e.preventDefault();
  if (email.value == myEmail && password.value == con_password.value) {
  alert("Password Updated succesfully!");
  localStorage.setItem('password',password.value)
  location.href='SignIn.html';
}
else if(email.value != myEmail ){
    alert("email is not valid!");
}
else if(password.value != con_password.value){
    alert("confirm password not match!");

}
else{
    
}

};