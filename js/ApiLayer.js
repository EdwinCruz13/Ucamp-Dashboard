/*Api layer is an api that retrieve information about currency
  params:
    url: https://api.apilayer.com/fixer/timeseries
    start_date: 2022-12-22
    end_date:   2022-12-23
    base: EUR
    symbols: USD or (USD, YPJ, GBT)
*/

const Key = "7JBi26XrxqHscCojd7wA1NQhTYTJsNKN";
const URL = "https://api.apilayer.com/fixer/timeseries?";

//get the date in properly format yyyy-mm-dd
const CurrentDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1 ) + "-" + new Date().getDate();


//create a request header
var myHeaders = new Headers();
myHeaders.append("apikey", Key);
//create an object that attach the apikey as header
const requestOptions = { method: 'GET', redirect: 'follow', headers: myHeaders};







//function that allow return the convertion according a date
let GetData = async(base, quote, dayBefore) =>{
  let PreviousDate = turnBackTime(dayBefore);

  //use fetch command in order to get the information from api
 await fetch(`${URL}start_date=${PreviousDate}&end_date=${CurrentDate}&base=${base}&symbols=${quote}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error: >', error));


}


let turnBackTime = (dayBefore) =>{
  //get go to the present because always the time is one day less
  var date = new Date(CurrentDate);
  date.setDate(date.getDate() + 1);

  //using the setdate in order to turn back time
  date.setDate(date.getDate() - dayBefore);

  //return the date in properly format yyyy-mm-dd
  return date.getFullYear() + "-" + (date.getMonth() + 1 ) + "-" + date.getDate();

}


//export default GetData;



//get data
//GetData("USD", "JPY", 0);










/*
var myHeaders = new Headers();
myHeaders.append("apikey", "7JBi26XrxqHscCojd7wA1NQhTYTJsNKN");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/timeseries?start_date=2022-12-22&end_date=2022-12-23&base=EUR&symbols=USD", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/