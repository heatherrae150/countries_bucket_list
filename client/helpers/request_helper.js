var request_helper = {
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



}
