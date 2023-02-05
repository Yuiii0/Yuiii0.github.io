const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpeg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");
body.style.backgroundImage = `url(bgimg/${chosenImage})`;
