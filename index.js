//declare vars

const submitBtn = document.getElementById("submit");
const displayEl = document.getElementById("display")
const  firstNameInput = document.getElementById("first-name")
const  lastNameInput = document.getElementById("last-name")
const  emailInput = document.getElementById("email")
const  passwordInput = document.getElementById("password")
//email input
//last name input
//name input
//submit button
// toggle ters and conditon



submitBtn.addEventListener("click", handleClick)

function handleClick(event) {
  event.preventDefault()
  
  if (firstNameInput.value ==="" && lastNameInput .value==="" && emailInput.value ==="" && passwordInput.value === "" 
  ){ return errorMessage("Pls fill the form to continue")}
  else {
      if (lastNameInput.value===""){
errorMessage("please input your last name")}  ;
if (firstNameInput.value===""){
errorMessage("please input your first name")};
if (passwordInput.value===""){
  errorMessage("please input your password")}
  if (emailInput.value===""){
    errorMessage("please input your email address")} 
      
  }
}


function errorMessage (info) {

  displayEl.innerHTML = `<p class="red">${info}</p>`;
}












