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
  ctx;
  
  //instance a new object
  constructor(base, quote, dayBefore)
  {
    //set some variable
    this.CurrentDate = this.GetCurrentDate();
    this.DaysBefore = this.GetPreviousDate(dayBefore);

    console.log(this.CurrentDate, this.DaysBefore);

    //set apikey and url variable
    this.Key = "No0XBA3xseNqSElUygusBFBD6oz7DtTQ";
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
    let response = await fetch(this.URL, this.requestOptions)
                  .then(response => response.text())
                  .then((response) => {
                      //return the answer to object
                      return JSON.parse(response);
                  })
                  .catch(error => console.log('error: >', error));

    return response;
  }

  //this method return the current date, using the format yyyy-mm-dd
  GetCurrentDate()
  {
    let year = new Date().getFullYear();
    let month = (new Date().getMonth() + 1 ) < 10 ? "0" + (new Date().getMonth() + 1 ).toString() : (new Date().getMonth() + 1 ).toString();
    let day = new Date().getDate() < 10 ? "0" + new Date().getDate().toString() : new Date().getDate(); 


    return year + "-" + month + "-" + day;
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
      let year = date.getFullYear();
      let month = (date.getMonth() + 1 ) < 10 ? "0" + (date.getMonth() + 1 ).toString() : (date.getMonth() + 1 ).toString();
      let day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate(); 

      //return the date in properly format yyyy-mm-dd
      return year + "-" + month + "-" + day;
  }

}

/*var api = new ApiLayer("USD", "JPY", 1);
api.Retrieve();*/


