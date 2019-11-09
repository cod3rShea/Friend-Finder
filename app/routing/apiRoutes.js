
var friends = require('../data/friends.js');

module.exports = function(app, path) {
    
	app.get("/api/friends", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}

return res.json(potenialMatches);