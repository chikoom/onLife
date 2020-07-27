const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const router = express.Router();

router.get("/:userId", async (req, res) => {
  let { userId } = req.params
  const user = await User.findById(userId).populate(
    { path: "courses",
     populate: "course"
  })
  console.log(user.courses[0].progress)
  try {
    let returnData;
    if (user) { 
      // console.log(user)
      let username = user.userName;
      let userCoursesArray = user.courses;
      let numberOfCourses = userCoursesArray.length;
      let numOfCompletedCourses = user.courses.filter(
        (course) => course.progress === 1
      ).length;
      let overallProgress = 0;
      userCoursesArray.forEach(
        (course) => (overallProgress += course.progress)
      );
      overallProgress /= numberOfCourses;
      console.log(numberOfCourses, overallProgress);
      if (!numberOfCourses) {
        returnData = {
          username,
          numberOfCourses: 0,
          numOfCompletedCourses: 0,
          overallProgress: 0,
        };
        res.send(returnData);
      }

      // console.log(user);

      returnData = {
        userId,
        username,
        numberOfCourses,
        numOfCompletedCourses,
        overallProgress,
      };

      res.send(returnData);
    } else {
      res.send(`error: can't find user`);
    }
  } catch (error) {
    console.log(error);
    res.send(`error: error getting user info`);
  }
});

router.get("/courses/:userId", async (req, res) => {
  let { userId } = req.params;
  let courses = await User.findOne({ _id: userId }).populate({
    path: "courses.course",
    populate: {
      path: "provider",
    },
  });

  res.send(courses);
});

router.get("/sanity", async (req, res) => {
  res.send("all good");
});

module.exports = router;
