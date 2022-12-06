console.log("SearchResults start");

class SearchResults {
  constructor(searchFromHtml) {
    this.searchFromHtml = searchFromHtml;
  }

  renderResults(companies) {
    async function fetchNO2(URL) {
      try {
        const resultsList = document.getElementById("results");
        // remove all previus results
        function removeAllChildNodes(parent) {
          while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
          }
        }
        removeAllChildNodes(resultsList);

        console.log(URL);
        const response = await fetch(URL);
        const data2 = await response.json();
        console.log("this is data2 ", data2);
        // console.log(getDataOut2[i]["symbol"]);
        const getDataOut2 = data2;

        const Spinner = document.createElement("span");
        Spinner.innerHTML = `<span class="spinner-border" id="spinner-border" ></span> `;

        resultsList.setAttribute("class", "resultsList");
        const ResultLine = document.createElement("a");
        results.appendChild(ResultLine);

        //נתוני מניה לרשימה
        const ResultStockCancge = document.createElement("span");
        ResultStockCancge.setAttribute("class", "ResultStockCancge");
        ResultStockCancge.textContent = `${getDataOut2.profile.changesPercentage}`;

        // צובע תוצאות אחוזים
        `${getDataOut2.profile.changesPercentage}` > 0
          ? ResultStockCancge.classList.add("positiveValue")
          : ResultStockCancge.classList.add("negativeValue");

        // שורות בתוצאות הרשימה
        ResultLine.href = `company.html?symbol=${getDataOut2.symbol}`;
        ResultLine.setAttribute("class", "ResultLine");
        ResultLine.textContent = `${getDataOut2.profile.companyName}  (${getDataOut2.symbol})`;
        // ResultLine.innerHTML += ` <a href="company.html?symbol=${getDataOut2.symbol}"  class="ResultLine"    >  ${getDataOut2.profile.companyName}  (${getDataOut2.symbol})</a> `;

        // // תמונה קטנה
        const ResultLineIMG = document.createElement("img");
        ResultLineIMG.setAttribute("class", "ResultLineIMG");
        ResultLineIMG.src = `${getDataOut2.profile.image}`;

        Spinner.style.display = "none";

        resultsList.appendChild(ResultLine);
        ResultLine.prepend(ResultLineIMG);
        ResultLine.append(ResultStockCancge);

        return getDataOut2;
      } catch (err) {
        console.error(err);
        return { todos: [] };
      }
    }

    fetchNO2(
      `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${companies}`
    );

    console.log("this is SearchResults file " + companies);
  }
}

console.log("SearchResults end");
