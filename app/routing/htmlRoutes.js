const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/public/home", function(req, res){
   res.sendFile(path.join(__dirname, "/../public/home.html"));

})

router.get("/public/survey", function(req, res){
   res.sendFile(path.join(__dirname, "/../public/survey.html"));

});

module.exports = router;
