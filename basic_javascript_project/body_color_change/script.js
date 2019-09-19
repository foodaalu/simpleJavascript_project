// change bg color
const btn = document.querySelector('.colorBtn');
const body = document.querySelector('body');
const color = ['red','green','yellow'];
btn.addEventListener('click',changeColor);
function changeColor(){
    const random = Math.floor(Math.random() * color.length);
    body.style.backgroundColor = color[random];
}









