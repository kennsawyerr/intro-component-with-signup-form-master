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



submitBtn.addEventListener("click", ()=> {
 if (firstNameInput && lastNameInput && emailInput && passwordInput === "" 
    ){ return errorMessage("Pls fill the form to continue") }
    else {
        if (lastNameInput===""){
errorMessage("please input your last names")}  ;
if (firstNameInput===""){
  errorMessage("please input your first name")};
  if (passwordInput===""){
    errorMessage("please input your password")}
    if (emailInput===""){
      errorMessage("please input your email address")} 
        
    }
})


/*  
// declare variables
let inputVal = document.getElementById("inputVal");
const subscribeBtn = document.getElementById("subBtn");
const mainBdy = document.getElementById("main-bdy");
const successMessage = document.getElementById("successMessage");
const htmlMessageViewer = document.getElementById("email-message");

subscribeBtn.addEventListener("click", () => {
  let emailVal = inputVal.value;

  if (emailVal === "") {
    errorMessage("Please provide your email address");
  } else {
    const forbiddenArray = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (forbiddenArray.test(emailVal)) {
      successNotificationMessage("Validation successful");
      showSubscribeClip();
    } else {
      return errorMessage("Valid email required");
    }
  }
});

const showSubscribeClip = () => {
  mainBdy.style.display = "none";
  successMessage.style.display = "block";
};
function errorMessage(info) {
c+
}

const successNotificationMessage = (message) => {
  htmlMessageViewer.innerHTML = `<p class="green">${message}</p>`;
  inputVal.style.border = "1px solid green";
  inputVal.style.backgroundColor = " rgb(182, 252, 182)";
};



const dismissBtn = () => {
    mainBdy.style.display = "block";
    successMessage.style.display = "none";
  };

*/

function errorMessage (info) {

  displayEl.textContent = info;
}

