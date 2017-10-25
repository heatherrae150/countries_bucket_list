var requestHelper = require("../helpers/request_helper.js");
var renderList = require("./list_view.js");

var onSubmit = function(event){
  event.preventDefault();
  var select = document.getElementById("country-name-select")
  console.log(select.value);

  var country = {
    country_name: select.value
  }

  requestHelper.postRequest(
    "http://localhost:3000/api/countries",
    function(result){
      console.log("Responding to post request", result)
      renderList(result)
    },
    country
  )

}

var makeFormWork = function(){
  var form = document.querySelector("#new-country")

  form.addEventListener("submit", onSubmit)
}

module.exports = makeFormWork;
