const img = document.querySelector('.img');
const bg = document.querySelector('.container');
const replaceImage = (phone) => {
    img.src = phone;
}

const replaceBg = (color) => {
    bg.style.background = color;
}