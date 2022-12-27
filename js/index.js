import { ApiLayer } from "./ApiLayer.js";
import { chartLayer } from "./chartLayer.js";

//get the click event using dom
document.getElementById("EURUSD").addEventListener(
  "click",
  function () {
    SelectCurrency(this);
  },
  false
);

document.getElementById("GBPUSD").addEventListener(
  "click",
  function () {
    SelectCurrency(this);
  },
  false
);

document.getElementById("USDJPY").addEventListener(
  "click",
  function () {
    SelectCurrency(this);
  },
  false
);

document.getElementById("USDCAD").addEventListener(
  "click",
  function () {
    SelectCurrency(this);
  },
  false
);

document.getElementById("USDCHF").addEventListener(
  "click",
  function () {
    SelectCurrency(this);
  },
  false
);

document.getElementById("EURUSD_mobil").addEventListener(
  "click",
  function () {
    SelectCurrency(this);
  },
  false
);

document.getElementById("GBPUSD_mobil").addEventListener(
  "click",
  function () {
    SelectCurrency(this);
  },
  false
);

document.getElementById("USDJPY_mobil").addEventListener(
  "click",
  function () {
    SelectCurrency(this);
  },
  false
);

document.getElementById("USDCAD_mobil").addEventListener(
  "click",
  function () {
    SelectCurrency(this);
  },
  false
);

document.getElementById("USDCHF_mobil").addEventListener(
  "click",
  function () {
    SelectCurrency(this);
  },
  false
);

//this function gets the base and quote in base on click events
//after getting the base and quote information through the 'getAttribute' in data-
//consults to the api rest
function SelectCurrency(card) {
  /*const object = {
        "success": true,
        "timeseries": true,
        "start_date": "2022-12-20",
        "end_date": "2022-12-27",
        "base": "USD",
        "rates": {
          "2022-12-20": {
            "CAD": 1.360265
          },
          "2022-12-21": {
            "CAD": 1.361415
          },
          "2022-12-22": {
            "CAD": 1.363825
          },
          "2022-12-23": {
            "CAD": 1.36425
          },
          "2022-12-24": {
            "CAD": 1.36445
          },
          "2022-12-25": {
            "CAD": 1.360665
          },
          "2022-12-26": {
            "CAD": 1.355845
          },
          "2022-12-27": {
            "CAD": 1.350525
          }
        }
      }*/

  //get the base and quote
  let base = card.getAttribute("data-base");
  let quote = card.getAttribute("data-quote");

  let image = document.getElementById("selected-currency-image");
  image.src = `resources/${base}${quote}.png`;

  let text = document.getElementById("selected-currency");
  text.innerHTML = `${base}/${quote}`;

  //get the range of days
  let daysBefore = 2;

  //console.log(base, quote);
  let api = new ApiLayer(base, quote, 7);
  let response = api.Retrieve();

  //create the chart by an anwers
  response.then((res) => {
    //transform properties into list
    let labels = [];
    labels = Object.keys(res.rates); //get the date as labels

    let properties = [];
    properties = Object.values(res.rates); //get the object inside

    let values = [];
    properties.forEach((element, index) => {
      let internValue = Object.values(element);
      values.push(internValue[0]); //get the value inside
    });

    //create the chart
    var chart = new chartLayer(labels, values);
  });
}
