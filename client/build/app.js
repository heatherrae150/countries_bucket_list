window.addEventListener("load", function(){

  var countries = {
    url: "https://restcountries.eu/rest/v2/all",
    getCountries: function(url){
      var request = new XMLHttpRequest();
      request.open("GET", this.url);
      request.addEventListener("load", function(){
        console.log(JSON.parse(this.responseText))
      })
      request.send();
    }
  }

  // var countries = require("../countries.js")


  countries.getCountries();
})
