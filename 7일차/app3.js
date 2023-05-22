// const loginForm = document.getElementById("login-form");
// const loginForm = document.querySelector("#login-form"); 위와 같다
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
}
loginButton.addEventListener("click", onLoginBtnClick);