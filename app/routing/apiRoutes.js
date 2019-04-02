const express = require("express");
const friends = require("../data/friends");

const path = require("path");
const router = require('express').Router();


router.get("/friends", function (req, res) {
   res.json(friends);
   //res.send("get friends");
});

router.post("/friends", function (req, res) {
   console.log(req.body);
   console.log(friends)

   let closestFriend = 50;
   let closestFriendIndex = -1;

   friends.forEach((friend, index) => {
      
      const formula = (accum, curr) => parseInt(accum) + parseInt(curr);

      const score = friend.scores.reduce(formula)
      const otherScore = req.body.scores.reduce(formula)

      const diff = Math.abs(score - otherScore);
      if (closestFriend > diff) {
         closestFriend = diff;
         closestFriendIndex = index
      }
      console.log(score, otherScore)
   })
   console.log(closestFriend);

   res.json(friends[closestFriendIndex]);
   friends.push(req.body)
   console.log(friends)
});


module.exports = router;



