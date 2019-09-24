 const quotes =[
 {
      name:'Stephen King',
      quote: 'Get busy living or get busy dying.'
 },
 {
    name:'hello wrold',
    quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
},
{
    name:'Stephen King',
    quote: 'Get busy living or get busy dying.'
},
{
    name:'Stephen King',
    quote: 'Get busy living or get busy dying.'
},
{
    name:'Stephen King',
    quote: 'Get busy living or get busy dying.'
},
 ]
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
quoteBtn.addEventListener('click',displayQuote);
function displayQuote(){
            let number = Math.floor(Math.random() * quotes.length);
            // console.log(number);
            quoteAuthor.innerHTML = quotes[number].name;
            quote.innerHTML = quotes[number].quote;
}
 //console.log(quotes);
 



