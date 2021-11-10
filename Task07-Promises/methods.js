/*Extrae los datos del fake server*/ 

let getCompanies = new Promise(async function (resolve, reject) {
  let url = "https://my-json-server.typicode.com/FerLanzaC/training-engineering/companies";
  const res = await fetch(url);
  const companies = await res.json();
  if (companies !== null) {
    resolve(companies);
    console.log(companies);
  } else {
    let reason = new Error("Problem obtain data");
    reject(reason);
  }
});

/*Despliega los datos filtrados, en caso de ser necesario*/
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

/*Extrae la informacion recibida en la barra de busqueda y llama a la funcion que despliega los datos.*/ 
const filterData = () => {
  debugger;
  let filter = $("#searcher__bar-text").val();
  filterCompaniesData(filter);
};
