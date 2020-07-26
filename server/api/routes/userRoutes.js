const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const router = express.Router();

router.get("/:userId", async (req, res) => {
  let userId = req.params.userId;
  try {
  let user = await User.findById(userId);
  let returnData;
  if (user) {
    let username = user.userName;
    let userCoursesArray = user.courses;
    let numberOfCourses = userCoursesArray.length;
    let completedCourses = user.courses.filter((course) => course.progress === 1).length;
    let overallProgress = 0
    userCoursesArray.forEach((course => overallProgress += course.progress));
console.log(overallProgress)
    if (!numberOfCourses) {
      returnData = {
        username,
        numberOfCourses: 0,
        completedCourses: 0,
        overallProgress: 0,
      };
      res.send(returnData)
    }

    console.log(user)

    returnData = {
      userId,
      username,
      numberOfCourses,
      completedCourses,
      overallProgress,
    };
  
  res.send(returnData);
}
else {
    res.send(`error: can't find user` )
}}
catch (error) {
    console.log(error)
    res.send(`error: error getting user info`)
}
});

module.exports = router

//   GET /
// gets user info from DB
// returns { userId, username, numberOfCourses, completedCourses,overallProgress (avg progress) }
// if can't find user returns { error: can't find user }
// if no courses returns { username, 0, 0, 0 }
// if error returns { error: error getting user info }
