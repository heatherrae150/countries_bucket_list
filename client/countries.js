var countries = {
  url: "https://restcountries.eu/rest/v2/all",
  getCountries: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.addEventListener("load", function(){

      var countries = JSON.parse(request.responseText)
      var select = document.getElementById("country-name-select")

      countries.forEach(function(country) {
        var countryOption = document.createElement("option");
        countryOption.innerHTML = country.name;
        select.appendChild(countryOption);
      })
    })
    request.send();
  }
}

module.exports = countries;
