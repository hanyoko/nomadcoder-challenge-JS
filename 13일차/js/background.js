const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

//html에 img 추가하기
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

document.body.appendChild(bgImage);