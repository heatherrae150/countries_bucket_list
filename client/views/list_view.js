var renderList = function(countries){
  var mainDiv = document.querySelector("#main-div");

  mainDiv.innerHTML = "";

  var list = document.createElement("list");

  countries.forEach(function(country){
    var listItem = document.createElement("li")

    listItem.innerText = country.country_name;

    list.appendChild(listItem)
  })
  mainDiv.appendChild(list);
}

module.exports = renderList;
