const clock = document.querySelector("h2#clock");

// function sayHello(){
//     console.log("Hello");
// }

// setInterval(sayHello, 5000);

// function sayHello2(){
//     console.log("Hi");
// }

// setTimeout(sayHello2, 5000);

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);