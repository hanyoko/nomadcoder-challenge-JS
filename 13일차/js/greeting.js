const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const todoForm = document.querySelector("#main");
const greeting = document.querySelector("#greeting");
const usernameOut = document.querySelector("#saved-username");

const HIDDEN_CLASSNAME = "hidden";
const SHOWN_CLASSNAME = "shown";
const USERNAME_KEY = "username"

function onLoginSubmit(e) {
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.add(SHOWN_CLASSNAME);
    todoForm.style.margin = "0 auto";
    usernameOut.innerText = localStorage.getItem(USERNAME_KEY);
    
    if (username === "") {
        alert("Is it correct? Do it again 😂")
    } else if(username.length > 4) {
        alert("You've got too long name 🤪")
    }
}

loginForm.addEventListener("submit", onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername) { //if(savedToDos !== null)
   usernameOut.innerText = localStorage.getItem(USERNAME_KEY);
}