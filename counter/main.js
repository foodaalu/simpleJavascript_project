let counter = document.querySelector('.counter');
const addCont = document.querySelector('#addCounter');
const lowerCont = document.querySelector('#lowerCounter');
// console.log(counter,addCont,lowerCont);
let count = 0; 
addCont.addEventListener('click',(e) => {   
        e.preventDefault();
        count++;
        counter.innerHTML = count;
        if (counter.innerHTML >  '0' ) {
            counter.style.color = '#4caf50';
        }else if (counter.innerHTML === '0') {
            counter.style.color = 'white';
        }
        counter.animate(
            [
                    {
                        opacity: '0.2'
                    },
                    {
                        opacity: '1.0'
                    }
            ],
            {
                duration:500,
                fill: 'forwards' 
            }
            );
});

lowerCont.addEventListener('click',(l) => {
    l.preventDefault();
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = 'red';
    }
    counter.animate(
        [
            {
                opacity : '0.2'
            },
            {
                opacity: '1.0'
            }
        ],
        {
            duration : 500,
            fill: 'forwards'
        }
    );
});
