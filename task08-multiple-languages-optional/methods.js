
/*Order the list by alphabetical order*/ 
function sortJSON(data, key) {
  return data.sort(function (firstElement, secondElement) {
      var firstCompany = firstElement[key]
      var secondCompany = secondElement[key];
      if (firstCompany < secondCompany){
        return -1;
      }
      else if (firstCompany > secondCompany){
        return 1;
      }
      else{
        return 0;
      }
  });
}

/*Translate the data*/
const translateData = async (companies) => {
  for (let index = 0; index < 7; index++) {
    let item = companies[index].description;
    const spanish = await translate(item, { to: "es" });
    companies[index].description = spanish;
  }
  return companies;
};

/*Read the JSON and create a list of objects*/
let getCompanies = new Promise(async function (resolve, reject) {
  let url = "https://my-json-server.typicode.com/FerLanzaC/training-engineering/companies";
  const response = await fetch(url);
  const json = await response.json();
  const companies = sortJSON(json, 'name');
  const translatedData = translateData(companies);
  if (companies !== null) {
    resolve(translatedData);
  } else {
    let reason = new Error("Problem obtain data");
    reject(reason);
  }
});


/*Filter and display the data*/
const filterCompaniesData = (nameFilter) => {
  getCompanies
    .then(function (companies) {
      $(".element").remove();
      $.each(companies, function (index, item) {
        if(item.name.includes(nameFilter)){
          let template = document.getElementById("template").innerHTML;
        $(".elementsContainer").append(Mustache.render(template, item));
        }
      });
    })
    .catch(function (error) {
      console.log(error.message);
    });
};

filterCompaniesData("");

/*Save the information of the search bar and call filterCompaniesData*/ 
const filterData = () => {
  debugger;
  let filter = $("#searcher__bar-text").val();
  filterCompaniesData(filter);
};


