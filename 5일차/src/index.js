const bd = document.querySelector("body");

function Resize() {
  const size = window.innerWidth;
  if (size >= 700) {
    bd.style.backgroundColor = "tomato";
  } else if (size < 700 && size > 400) {
    bd.style.backgroundColor = "purple";
  } else {
    bd.style.backgroundColor = "red";
  }
}
window.addEventListener("resize", Resize)