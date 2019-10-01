const nexBtn = document.querySelector('.NextBtn');
const images = document.querySelector('.images');
const preBtn = document.querySelector('.preBtn');
// next btn
let counter = 0;
nexBtn.addEventListener('click', (e) => {
    images.animate(
        [
            {
                opacity : '0.1'
            },
            {
                opacity : '1.0'
            }
        ],
        {
            duration : 1000,
            fill : 'forwards'
        }
    );
    if (counter === 2)  {
        counter =  -1;
    }
           counter++;
           images.style.backgroundImage = `url(img/a-${counter}.jpg)`;        
});

// pre btn
preBtn.addEventListener('click', (e) => {
    images.animate(
        [
            {
                opacity : '0.1'
            },
            {
                opacity : '1.0'
            }
        ],
        {
            duration : 1000,
            fill : 'forwards'
        }
    );
    
    if (counter === 0)  {
        counter =  3;
    }
           counter--;
           images.style.backgroundImage = `url(img/a-${counter}.jpg)`;        
});