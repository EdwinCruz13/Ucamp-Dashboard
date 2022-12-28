export class chartLayer {
  ctx;
  newchart;
  constructor(labels, data) {
    this.ctx = document.getElementById("myChart");

    //execute the chart
    this.CreateChart(labels, data);
  }

  //create a chart in base a element from the body html
  //use DOM in order to create the linear chart
  async CreateChart(_labels, _data) {
    //verify before
    if (Chart.getChart("myChart")) {
      Chart.getChart("myChart").destroy();
    }

    //INSTANCE A NEW chart.js
    this.newchart = await new Chart(this.ctx, {
      type: "line",
      data: {
        labels: _labels,
        datasets: [
          {
            label: "Currency",
            data: _data,
            //borderColor: Utils.CHART_COLORS.black,
            backgroundColor: "#fbc02d",
            pointStyle: "circle",
            pointRadius: 5,
            pointHoverRadius: 7,
            fill: false,
            borderColor: "#000",
            tension: 0.1,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Exchange rate in the last 7 days"
          },
        },
       
      },
    });

    // Resizing the chart must be done manually, since OffscreenCanvas does not include event listeners.
    this.ctx.style.width = "350px"
    this.ctx.style.height = "250px"
  }
}
