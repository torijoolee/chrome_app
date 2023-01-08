const image = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const randomImage = image[Math.floor(Math.random() * image.length)];

console.log(randomImage);

const bgImage = document.createElement("img");
bgImage.src = `img/${randomImage}`;
document.body.appendChild(bgImage);
