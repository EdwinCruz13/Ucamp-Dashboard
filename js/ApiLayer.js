/*Api layer is an api that retrieve information about currency
  params:
    url: https://api.apilayer.com/fixer/timeseries
    start_date: 2022-12-22
    end_date:   2022-12-23
    base: EUR
    symbols: USD or (USD, YPJ, GBT)
*/

export class ApiLayer
{
  //declare some variables
  Key; URL; CurrentDate; requestOptions; myHeaders;
  CurrentDate; DaysBefore;
  
  //instance a new object
  constructor(base, quote, dayBefore)
  {
    //set some variable
    this.CurrentDate = this.GetCurrentDate();
    this.DaysBefore = this.GetPreviousDate(dayBefore);

    //set apikey and url variable
    this.Key = "4uOzAAJY4BFWLFIUudTzjYODGJ33yLSG";
    this.URL = `https://api.apilayer.com/fixer/timeseries?start_date=${this.DaysBefore}&end_date=${this.CurrentDate}&base=${base}&symbols=${quote}`;
    

  }

  //consuming a webservice
  async Retrieve()
  {

    //set a new header
    this.myHeaders = new Headers();
    this.myHeaders.append("apikey", this.Key);
    this.requestOptions = { method: 'GET', redirect: 'follow', headers: this.myHeaders};

    
    //using fetch in order to make a request
    await fetch(this.URL, this.requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error: >', error));
  }

  //this method return the current date, using the format yyyy-mm-dd
  GetCurrentDate()
  {
    return new Date().getFullYear() + "-" + (new Date().getMonth() + 1 ) + "-" + new Date().getDate();
  }

  //this method returns a specific date, using the format yyyy-mm-dd
  //current date - day bac
  GetPreviousDate(dayBefore)
  {
      //get go to the present because always the time is one day less
      var date = new Date(this.CurrentDate);
      date.setDate(date.getDate() + 1);

      //using the setdate in order to turn back time
      date.setDate(date.getDate() - dayBefore);

      //return the date in properly format yyyy-mm-dd
      return date.getFullYear() + "-" + (date.getMonth() + 1 ) + "-" + date.getDate();
  }

}

/*var api = new ApiLayer("USD", "JPY", 1);
api.Retrieve();*/


