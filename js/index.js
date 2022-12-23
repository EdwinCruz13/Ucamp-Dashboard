//import retrieveData from "./ApiLayer.js";


//get the card
function SelectCurrency(card) 
{
    //get the base and quote 
    var base = card.getAttribute('data-base'); 
    var quote = card.getAttribute('data-quote'); 

    //get the range of days
    var daysBefore = 2;

    console.log(base, quote);
    var Object = retrieveData(base, quote, daysBefore)
    
}




/*const cardEURUSD = document.getElementById("EURUSD");

cardEURUSD.addEventListener('click', () => {
    alert('You clicked the button');
});*/

//var base = card.getAttribute('data-base'); 



