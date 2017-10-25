var express = require("express");
var router = express.Router();
var queryHelper = require("../db/query_helper.js")

router.get("/", function(req, res){
  console.log("api/countries/ route hit");

  queryHelper.all(function(countries){
    console.log("query helper hit");
    res.json(countries);
  })
})


module.exports = router;
