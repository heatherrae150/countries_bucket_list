var requestHelper = {
  getRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url)

    request.addEventListener("load", function(){
      var jsonString = request.responseText;
      var data = JSON.parse(jsonString);
      callback(data)
    })
    request.send();
  },

  postRequest: function(url, callback, payload){
    var request = new XMLHttpRequest();
    request.open("POST", url)

    request.setRequestHeader("Content-Type", "application/json")

    request.addEventListener("load", function(){
      if (request.status != 200) return
      var jsonString = request.responseText;
      var data = JSON.parse(jsonString)
      callback(data)
    })

    var jsonString = JSON.stringify(payload);

    request.send(jsonString)
  }

}

module.exports = requestHelper;
