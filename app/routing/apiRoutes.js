

// Pull in required dependencies
var path = require('path');

var potenialFriends = require('../data/friends.js');

module.exports = function (app) {
  app.get('/api/friends', function (req,res) {
      res.json(potenialFriends);
    });


    app.post("/api/friends", function (req, res) {
      var newFriend = req.body;
      potenialFriends.push(newFriend);
      res.json(newFriend);
  });
}