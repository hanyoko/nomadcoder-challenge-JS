const h1 = document.querySelector("hello");

function superEventHandle(){
    h1.style.color = "green";
}

h1.addEventListener("mouseenter", superEventHandle);