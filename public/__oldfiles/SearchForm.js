console.log("start SearchForm JS");



class SearchForm {
  constructor(_thSearchForm, _precent, _SYMBOLclass, _PRECENTclass) {
    // this.symbol = _thesymbol;
  }

  onSearch(renderResults) {
    const Spinner = document.createElement("span");
    Spinner.innerHTML = `<span class="spinner-border" id="spinner-border" ></span> `;
    Spinner.style.display = "none";

    const DivSearchItems = document.createElement("div");
    DivSearchItems.setAttribute("id", "search-items");
    DivSearchItems.classList.add("input-group", "mb-3");
    form.appendChild(DivSearchItems);

    const errorMSG = document.createElement("p");
    errorMSG.innerHTML = "we couldn't find any results" ;
    form.appendChild(errorMSG);
    errorMSG.style.display = "none";

    function searchButtonfunction() {

      console.log("click in the main button");
      errorMSG.style.display = "none";
      Spinner.style.display = "inline-block";
      console.log(serchField.value);

      let URLforSEARCH =
        "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=" +
        serchField.value +
        "&limit=10&exchange=NASDAQ";
      console.log(URLforSEARCH);
      fetch1(URLforSEARCH);
    }

    async function fetch1(URL) {
      try {
        let companies;
        const response = await fetch(URL);
        const data = await response.json();


       
        (data.length === 0) ?    ///   אם אין תוצאות
         (Spinner.style.display = "none",  errorMSG.style.display = "block", renderResults())
           :   console.log("this is the companies from the form ", data);
     
        for (let i = 0; i < data.length; i++) {
          companies = data[i].symbol;
          renderResults(companies);
          Spinner.style.display = "none";
        }

        return companies;
      } catch (err) {
        console.error(err);
        return { todos: [] };
      }
    }

    const serchField = document.createElement("input");
    serchField.setAttribute("id", "search-field");
    serchField.setAttribute("class", "form-control");
    serchField.setAttribute("type", "text");
    serchField.setAttribute("placeholder", "Search the Nasdaq");
    serchField.classList.add("input-group");
    DivSearchItems.appendChild(serchField);

    const PrimaryButton = document.createElement("button");
    PrimaryButton.addEventListener("click", searchButtonfunction);
    PrimaryButton.setAttribute("type", "button");
    PrimaryButton.classList.add("btn", "btn-primary");
    DivSearchItems.appendChild(PrimaryButton);

    const buttonIcon = new Image(16, 16);
    buttonIcon.src = "./images/search.svg";
    PrimaryButton.appendChild(buttonIcon);

    form.append(Spinner);

    console.log("end of serchform class");





  }
}

console.log("end index code");
