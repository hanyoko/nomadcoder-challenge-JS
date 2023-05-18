const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    console.log("title was clicked!");
    h1.style.color =  "blue";    //클릭했을 때 색깔을 blue로 변경
}
function handleMouseEnter(){
    console.log("mouse is here");
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    console.log("mouse is gone");
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier !");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
funtion

// title.style.color="blue";       //색깔을 blue로 변경
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);