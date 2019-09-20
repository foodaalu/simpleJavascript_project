const randomHexColor = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btnclick = document.querySelector('.hexBtn');
const body = document.querySelector('body');
const textMessage = document.querySelector('.hex');



btnclick.addEventListener('click',GenerateNumber);
function GenerateNumber(){
    let hex = '#';
    for(let i=0;i<6;i++){
        let random = Math.floor(Math.random() * randomHexColor.length);
        hex += randomHexColor[random];
    }
    body.style.backgroundColor = hex;
    textMessage.innerHTML = hex;
}