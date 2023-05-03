const button = document.querySelector('.wrapper button');
const screen = document.querySelector('.wrapper div');
const color = document.querySelector('.wrapper p');
const HEX = '0123456789ABCDEF'.split('');

const getRandomColor = () => {
    let someColor = '#';

    for(let i = 0; i < 6; i++){
        someColor += HEX[Math.ceil(Math.random() * (HEX.length) -1)]
    }

    color.textContent = someColor;

    screen.style.backgroundColor = someColor;
}

button.addEventListener('click', getRandomColor)