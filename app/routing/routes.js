
const path = require('path');
var friendData = require("../data/friends.js")
// html routes
module.exports = function(app){
   
app.get("/", function(req, res) {
   
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

// api routes
app.get("/api/friends", function(req, res){
    res.json(friendData)
    
});

app.post("/api/friends", function(req, res) {
    

    friendData.push(req.body);
console.log(friendData)
  
});




};

