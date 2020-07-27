// PUT /extension/progress/:userId/:providerId/:providerCourseId
// updates the progress for a specific course
// req.body.progress = number between 0 to 1
// returns the updated object {course, progress}

const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const router = express.Router();

router.put("/updateProgress", async (req, res) => {
  const { userId, providerName, courseURL, progress } = req.body;
//   const user = await User.findById(userId)
//   console.log(user)
  const course = await Course.findOne({ courseURL: courseURL });
  if (!course) {
    console.log("send to crawler");
} else {
    console.log(course);
    const courseToUpdate = await User.findOneAndUpdate(
      { _id: userId, "courses.course": course._id },
      {
        $set: {
          "courses.$.progress": progress,
        },
      },
      { new: true }
      )
      console.log(courseToUpdate)
      res.send(courseToUpdate)
  }


});

module.exports = router;
