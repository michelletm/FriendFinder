var express = require("express");
//var path = require("path");

const app = express();

var PORT = process.env.PORT || 3000;

// const apiRoutes = require("./apiRoutes/api");
// const htmlRoutes = require("./htmlRoutes/html")

// app.use(apiRoutes) = require(".routing/apiRoutes")

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
});