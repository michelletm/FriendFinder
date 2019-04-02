const path = require("path");
const router = require("express").Router();



router.get("/home", function(req, res){
   res.sendFile(path.join(__dirname, "/../public/home.html"));
})

router.get("/survey", function(req, res){
   res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

module.exports = router;




