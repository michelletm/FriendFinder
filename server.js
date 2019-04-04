var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

//CSS//
app.use("/static", express.static(path.join(__dirname, "app/static")))

const htmlRoutes = require('./app/routing/htmlRoutes')
const apiRoutes = require("./app/routing/apiRoutes")

//app.use(express.static("public"));
app.use("/api", apiRoutes)
app.use(htmlRoutes)


app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
});