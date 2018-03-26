
const path = require('path');
var friendData = require("../data/friends.js")
// html routes
module.exports = function (app) {

    app.get("/", function (req, res) {

        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    var closestMatch = 100
    var lowIndex = 0

    // api routes
    app.get("/api/friends", function (req, res) {
        res.json(friendData)


    });

    app.post("/api/friends", function (req, res) {
        var totalDifference = 0;
        var newFriend = req.body;
        console.log(newFriend);
        for (i = 0; i < friendData.length; i++) {
            totalDifference =
                (Math.abs(parseInt(friendData[i].Answers[0] - parseInt(newFriend.Answers[0]))))
                + (Math.abs(parseInt(friendData[i].Answers[1] - parseInt(newFriend.Answers[1]))))
                + (Math.abs(parseInt(friendData[i].Answers[2] - parseInt(newFriend.Answers[2]))))
                + (Math.abs(parseInt(friendData[i].Answers[3] - parseInt(newFriend.Answers[3]))))
                + (Math.abs(parseInt(friendData[i].Answers[4] - parseInt(newFriend.Answers[4]))))
                + (Math.abs(parseInt(friendData[i].Answers[5] - parseInt(newFriend.Answers[5]))))
                + (Math.abs(parseInt(friendData[i].Answers[6] - parseInt(newFriend.Answers[6]))))
                + (Math.abs(parseInt(friendData[i].Answers[7] - parseInt(newFriend.Answers[7]))))
                + (Math.abs(parseInt(friendData[i].Answers[8] - parseInt(newFriend.Answers[8]))))
                + (Math.abs(parseInt(friendData[i].Answers[9] - parseInt(newFriend.Answers[9]))))
            if (totalDifference < closestMatch) {
                closestMatch = totalDifference;
                lowIndex = i;
            }
            console.log(totalDifference);
        }
        

        // error line 
        // friendData.push(newFriend);
        res.json(friendData[lowIndex]);
        
        console.log(friendData)
    });

   
    



};

