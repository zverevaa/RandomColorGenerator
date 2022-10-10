let color = () => {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    return `rgb(${red}, ${green}, ${blue})`;
};

const body = document.querySelector('body');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    let currentColor = color();
    body.style.background = currentColor;
    h1.innerText = currentColor;
});