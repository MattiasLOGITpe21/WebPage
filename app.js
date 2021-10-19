const currentImage = document.querySelector("#image");

const images = ["imgs/pilt_1.jpg", "imgs/pilt_2.jpg", "imgs/pilt_3.jpg"];

function changeImage() {
    
    let randomNumber = Math.floor(Math.random()*images.length);
    console.log(randomNumber);
    currentImage.src = images[randomNumber];
}