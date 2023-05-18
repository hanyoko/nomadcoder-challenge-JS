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
function handleWindowOnline(){
    alert("ALL GOOD !");
}

// title.style.color="blue";       //색깔을 blue로 변경
h1.addEventListener("click", handleTitleClick);             //h1을 클릭할 때
h1.addEventListener("mouseenter", handleMouseEnter);        //h1에 마우스를 올릴 때
h1.addEventListener("mouseleave", handleMouseLeave);        //h1에서 마우스가 떠날 때

window.addEventListener("resize", handleWindowResize);      //window 사이즈를 조절할 때
window.addEventListener("copy", handleWindowCopy);          //window에서 복사를 할 때
window.addEventListener("offline", handleWindowOffline);    //wifi 연결을 해제했을 때
window.addEventListener("online", handleWindowOnline);      //wifi 연결을 했을 때