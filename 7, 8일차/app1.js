// const loginForm = document.getElementById("login-form");
// const loginForm = document.querySelector("#login-form"); 위와 같다
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if(username === ""){
        alert("Please write your name");
    }else if(username.length > 15){
        alert("Your name is too long.");
    }
}
loginButton.addEventListener("click", onLoginBtnClick);