const myLinkToSignUp = document.getElementById("link-to-signup");
const myLinkToLogin = document.getElementById("link-to-login");
const backToLogin = document.getElementById("link-to-login");
const login = document.getElementById("Login");
const signUp = document.getElementById("Signup");
const errorMessDisplaying = document.getElementById("error_message_display");

//input variables

const inputName = document.getElementById("name");
const inputMail = document.getElementById("mail");
const inputPhone = document.getElementById("phone");
const inputPassWord = document.getElementById("password");
const inputPassWordConfirmation = document.getElementById("confirm_password");
const myForm = document.getElementById("existing_account");
const mySecondForm = document.getElementById("create");


// input variables checking

myForm.addEventListener("submit", onSubmit);

function onSubmit(){
    if(inputName ==='' || inputMail === '' || inputPhone === "" || inputPassWord === ""){
        errorMessDisplaying.innerHTML = "Please, fill all fields";
        errorMessDisplaying.classList.add("errorMessageDisplaying");
    }
}


//The link of switching to sign up

myLinkToSignUp.style.color = "rgb(92, 26, 26";
myLinkToSignUp.style.cursor = "pointer";
myLinkToSignUp.style.textDecoration = "underline";
myLinkToSignUp.addEventListener("click", displaySignUp);
function displaySignUp(){
    login.style.display = "none";
    signUp.style.display = "block";
}
// The link of switching back to login
backToLogin.style.color = "rgb(92, 26, 26";
backToLogin.style.cursor = "pointer";
backToLogin.style.textDecoration = "underline";
backToLogin.style.marginTop = "5px";
backToLogin.addEventListener("click", function(){
    signUp.style.display = "none";
    signUp.style.transition ="5s ease";
    login.style.display = "block";
    // signUp.classList.add("transition");
})



