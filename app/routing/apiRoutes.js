const express = require("express");
const router = express.Router();

const friends = require("../data/friends");

///in one big function?////

router.get("/api/friends", function(req, res){
   res.json(friends);

})
app.post("/api/friends", function(req, res) {
   console.log(req.body.scores);

   var userInput = req.body;

   for(var i = 0; i < userInput.scores.length; i++) {
     userInput.scores[i] = parseInt(userInput.scores[i]);
   }
});

////function for determining friend match results goes here//////////////

   for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
      var difference = Math.abs(userInput.scores[j] - friends[i].scores[j]);
      totalDifference += difference;
      }
   };

   friends.push(userInput);

      res.json(friends[bestFriendIndex]);


//module.exports = router;

