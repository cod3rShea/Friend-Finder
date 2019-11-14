

// Pull in required dependencies
var path = require('path');
var potenialFriends = require('../data/friends.js');

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(potenialFriends);
  });
  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var currentUserInfo = parseInt(newFriend.scores);
    var personLowestDifference = "";
    var personLowestName = "";
    var personLowestPhoto = "";
    for (var i = 0; i < potenialFriends.length; i++) {
      var potenialFriendsNumber = potenialFriends[i].scores;
      var potenialFriendsDifference = 0;
      var potenialFriendsName = potenialFriends[i].name;
      var potenialFriendsPhoto = potenialFriends[i].photo;
      for (var j = 0; j < potenialFriendsNumber.length; j++) {
        var number = potenialFriendsNumber[j];
        var newUserNumber = parseInt(newFriend.scores[j]);
        potenialFriendsDifference += Math.abs(number - newUserNumber);
      }
      if (personLowestDifference === "") {
        personLowestDifference = potenialFriendsDifference;
        personLowestName = potenialFriendsName;
        personLowestPhoto = potenialFriendsPhoto;

      } else if(potenialFriendsDifference < personLowestDifference) {
        personLowestDifference = potenialFriendsDifference;
        personLowestName = potenialFriendsName;
        personLowestPhoto = potenialFriendsPhoto;
      } 
    }
    // potenialFriends.push(newFriend);
    res.send(personLowestName + "," + personLowestPhoto);
  });
}

