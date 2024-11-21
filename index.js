// Get references to the form elements
const home = document.getElementById("home");
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const forgotPasswordForm = document.getElementById("forgot-password");
const forgotAccountForm = document.getElementById("forgot-account");
const about = document.getElementById("forgot-account");
const data = document.getElementById("data");
const temperature = document.getElementById("forgot-account");
const humidity = document.getElementById("forgot-account");
const airpollution = document.getElementById("forgot-account");

// Add event listeners for navigation links

// From Login Form
document.querySelector("#login .other-link[href='#register']").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

document.querySelector("#login .other-link[href='#forgot-password']").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    forgotPasswordForm.style.display = "block";
});

// From Register Form
document.querySelector("#register .other-link[href='#login']").addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.style.display = "none";
    loginForm.style.display = "block";
});

// From Forgot Password Form
document.querySelector("#forgot-password .other-link[href='#forgot-account']").addEventListener("click", (e) => {
    e.preventDefault();
    forgotPasswordForm.style.display = "none";
    forgotAccountForm.style.display = "block";
});

// From Forgot Account Form
document.querySelector("#forgot-account .other-link[href='#forgot-password']").addEventListener("click", (e) => {
    e.preventDefault();
    forgotAccountForm.style.display = "none";
    forgotPasswordForm.style.display = "block";
});

document.querySelector("#forgot-account .other-link[href='#login']").addEventListener("click", (e) => {
    e.preventDefault();
    forgotAccountForm.style.display = "none";
    loginForm.style.display = "block";
});

// Initial display logic (optional)
function hideAllForms() {
    loginForm.style.display = "none";
    registerForm.style.display = "none";
    forgotPasswordForm.style.display = "none";
    forgotAccountForm.style.display = "none";
}

// Initially show only the login form
hideAllForms();
loginForm.style.display = "block";
