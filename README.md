# FriendFinder
# [FriendFinder](https://friend-finder-maddie.herokuapp.com/)
## Overview
In this activity, you'll build a compatibility-based "FriendFinder" application--basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
## Dependencies
* body-parser
* express
* path
## Installation
### Install Locally
```
git clone https://github.com/thechampl/FriendFinder.git
npm install
```git
### Command
```
node server.js
```
## Requirements
- [x] Your survey should have 10 questions of your choosing. 
- [x] Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
- [x] Your `server.js` file should require the basic npm packages we've used in class: 
  - [x] express
  - [x] body-parser
  - [x] path
  - [x] Your `Routes.js` file should contain:
  - [x] A GET Route
    - [x] Displays `survey.html` 
  - [x] A Default Route 
    - [x] Displays `home.html` 
  - [x] A GET Route
    - [x] URL: `/api/friends`
    - [x] Displays JSON of all possible friends
  - [x] A POST Route
    - [x] URL: `/api/friends`
    - [x] Handles incoming survey results
    - [x] Handles compatibility logic
- [x] Save your application's data inside of `app/data/friends.js` as an array of objects.
- [x] Determine the user's most compatible friend using the following as a guide:
    - [x] Convert each user's results into a simple array of numbers.
    - [x] With that done, compare the difference between current user's scores against those from other users, question by question.
    - [x] Add up the differences to calculate the totalDifference.
    - [x] Remember to use the absolute value of the differences.
    - [x] The closest match will be the user with the least amount of difference.
    - [x] Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    - [x] The modal should display both the name and picture of the closest match.