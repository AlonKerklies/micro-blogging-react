console.log("-------the company page----------");
const KeyAndValueFromURL = window.location.search;
// console.log("KEYS & VALUE:" ,KeyAndValueFromURL);
const urlParams = new URLSearchParams(KeyAndValueFromURL);
const paramSymbol = urlParams.get("symbol");
console.log("the symbol param is:", paramSymbol);

const companyPrice = document.getElementById("company-price");
const companyName = document.getElementById("company-name");
const companyDescription = document.getElementById("company-description");
const companyImage = document.getElementById("company-image");
const companyWebsite = document.getElementById("company-website");
let companyChangesPercentage = document.getElementById(
  "company-changesPercentage"
);

let TakeValueToColorFunction;
let data;
let getDataOut1;
let getDataOutForChart;

//URL 1 is for the main company page and  URL2 is for the chart
const URL1 = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${paramSymbol}`;
const URL2 = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${paramSymbol}?serietype=line`;

function insertTheResultsToDom() {
  companyPrice.innerHTML += getDataOut1.profile.price;
  companyName.innerHTML = `${getDataOut1.profile.companyName} (${paramSymbol})`;
  companyDescription.innerHTML = getDataOut1["profile"]["description"];
  companyWebsite.innerHTML = `<a href=${getDataOut1.profile.website} ><button type="button" class="btn btn-outline-secondary btn-sm">visit their website</button></a>` 
  companyImage.src = getDataOut1.profile.image;
  companyImage.alt = getDataOut1.profile.companyName;
  companyChangesPercentage.innerHTML = `(${getDataOut1["profile"]["changesPercentage"]})`;
  //בדוק את הערך בפונקציה
  TakeValueToColorFunction = getDataOut1.profile.changesPercentage;
  ChangesPercentageCOLOR(TakeValueToColorFunction);
}

//אם חיובי - ירוק, אם שלילי אדום
function ChangesPercentageCOLOR() {
  if (TakeValueToColorFunction > 0) {
    companyChangesPercentage.classList.add("positiveValue");
  } else {
    companyChangesPercentage.classList.add("negativeValue");
  }
}

async function fetch1(URL) {
  try {
    console.log("start fetch fro URL ");
    const response = await fetch(URL);
    const data = await response.json();
    console.log("current fetch : ", data);
    // console.log(data);
    // console.log(data[0]);
    if (URL === URL1) {
      console.log("fetch from URL1");
      getDataOut1 = data;
      insertTheResultsToDom(getDataOut1);
    } else {
      console.log("fetch from URL2");
      getDataOutForChart = data;
      // insertTheChartToDom(getDataOutForChart);
      doMeAChartSir(getDataOutForChart);
    }

    return data;
  } catch (err) {
    console.error(err);
    return { todos: [] };
  }
}

//URL 1 is for the main company page and  URL2 is for the chart
fetch1(URL1).then((todos) => {});
fetch1(URL2).then((todos) => {});
// chart3
let myChart = document.getElementById("myChart").getContext("2d");

function doMeAChartSir() {
  // console.log(" chart data :", getDataOutForChart);
  // console.log(getDataOutForChart["symbol"]);

  // Global Options
  // Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 13;
  Chart.defaults.global.defaultFontColor = "black";

  let massPopChart = new Chart(myChart, {
    type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea

    data: {
      labels: [
        getDataOutForChart["historical"][11].date,
        getDataOutForChart["historical"][10].date,
        getDataOutForChart["historical"][9].date,
        getDataOutForChart["historical"][8].date,
        getDataOutForChart["historical"][7].date,
        getDataOutForChart["historical"][6].date,
        getDataOutForChart["historical"][5].date,
        getDataOutForChart["historical"][4].date,
        getDataOutForChart["historical"][3].date,
        getDataOutForChart["historical"][2].date,
        getDataOutForChart["historical"][1].date,
        getDataOutForChart["historical"][0].date,
      ],
      datasets: [
        {
          // label:'Population',
          data: [
            getDataOutForChart["historical"][11].close,
            getDataOutForChart["historical"][10].close,
            getDataOutForChart["historical"][9].close,
            getDataOutForChart["historical"][8].close,
            getDataOutForChart["historical"][7].close,
            getDataOutForChart["historical"][6].close,
            getDataOutForChart["historical"][5].close,
            getDataOutForChart["historical"][4].close,
            getDataOutForChart["historical"][3].close,
            getDataOutForChart["historical"][2].close,
            getDataOutForChart["historical"][1].close,
            getDataOutForChart["historical"][0].close,
          ],
          //backgroundColor:'green',
          backgroundColor: [
            "rgba(88, 88, 88, 0.5)",
            "rgba(88, 88, 88, 0.5)",
            "rgba(88, 88, 88, 0.5)",
            "rgba(88, 88, 88, 0.5)",
            "rgba(88, 88, 88, 0.5)",
            "rgba(88, 88, 88, 0.5)",
            "rgba(88, 88, 88, 0.5)",
            "rgba(88, 88, 88, 0.5)",
            "rgba(88, 88, 88, 0.5)",
            "rgba(88, 88, 88, 0.5)",
            "rgba(88, 88, 88, 0.5)",
            "rgba(0, 0, 255, 0.6)",
          ],
          barThickness: 0.1,
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 3,
          hoverBorderColor: "#000",
        },
      ],
    },
    options: {
      title: {
        // position: 'left',
        Align: "start",
        display: true,
        text: `${getDataOutForChart["symbol"]} performance over time `,
        fontSize: 15,
        fontweight: "normal",
        Align: "start",
      },
      legend: {
        display: false,
        position: "right",
        labels: {
          fontColor: "#000",
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        },
      },
      tooltips: {
        enabled: true,
      },
    },
  });
}
// chart 3 end
