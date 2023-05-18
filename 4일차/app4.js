const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color =  "blue";    //클릭했을 때 색깔을 blue로 변경
}
function handleMouseEnter(){
    console.log("mouse is here");
    title.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    console.log("mouse is gone");
    title.innerText = "Mouse is gone!";
}


// title.style.color="blue";       //색깔을 blue로 변경
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);