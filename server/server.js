var express = require("express");
var app = express();
var countriesRouter = require("./controllers/countries_controller.js");
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/../client/build"));
app.use("/api/countries", countriesRouter);


app.listen(3000, function(){
  console.log("Listening on port 3000");
  
})
