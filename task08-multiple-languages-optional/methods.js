
/*Order the list by alphabetical order*/ 
function sortJSON(data, key) {
  return data.sort(function (firstElement, secondElement) {
      const firstCompany = firstElement[key]
      const secondCompany = secondElement[key];
      if (firstCompany < secondCompany) {
        return -1;
      }
      else if (firstCompany > secondCompany) {
        return 1;
      }
      else{
        return 0;
      }
  });
}

/*Translate the data*/
const translateData = async (companies,language) => {
  for (let index = 0; index < 7; index++) {
    let item = companies[index].description;
    if(language== "es") {
      const spanish = await translate(item, { to: "es" });
      companies[index].description = spanish;
    } else {
      const english = await translate(item, { to: "en" });
      companies[index].description = english;
    }
  }
  return companies;
};

/*Read the JSON and create a list of objects*/
let getCompanies = async function(language) {
  let url = "https://my-json-server.typicode.com/FerLanzaC/training-engineering/companies";
  const response = await fetch(url);
  const json = await response.json();
  const companies = sortJSON(json, 'name');
  const translatedData = translateData(companies,language);
  if (companies !== null) {
    return(translatedData);
  } else {
    throw new Error('Problem to obtain data');
  }
};


/*Filter and display the data*/
const filterCompaniesData = async (nameFilter,language) => {
  try {
    getCompanies(language)
    .then(companies => {
      $(".element").remove();
      $.each(companies, (index, item) => {
        if(item.name.includes(nameFilter)) {
          let template = document.getElementById("template").innerHTML;
          $(".elementsContainer").append(Mustache.render(template, item));
        }
      });
    })
  }
  catch(error) {
      console.log(error.message);
  }
};

filterCompaniesData("",'en');

/*Save the information of the search bar and call filterCompaniesData*/ 
const filterData = () => {
  debugger;
  let filter = $("#searcher__bar-text").val();
  filterCompaniesData(filter);
};


