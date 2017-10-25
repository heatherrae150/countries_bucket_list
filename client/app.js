var countries = require("./countries.js")
var requestHelper = require("./helpers/request_helper.js")
var makeFormWork = require("./views/form_view.js");
var renderList = require("./views/list_view.js");

window.addEventListener("load", function(){

  makeFormWork()

  requestHelper.getRequest("http://localhost:3000/api/countries",
  function(countries){
    renderList(countries);
  })

  countries.getCountries();
})
