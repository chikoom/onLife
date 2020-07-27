// PUT /extension/progress/:userId/:providerId/:providerCourseId
// updates the progress for a specific course
// req.body.progress = number between 0 to 1
// returns the updated object {course, progress}
const Crawler = require("../../crawler/Crawler");
const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const router = express.Router();

router.put("/updateProgress", async (req, res) => {
  const { userId, providerName, courseURL, progress } = req.body;
  const course = await Course.findOne({ courseURL: courseURL });
  if (!course) {
    console.log("send to crawler");
    const crawler = new Crawler();
    const courseFromCrawler = await crawler.addSingleCourseByProviderName(
      providerName,
      courseURL
    );
    const course = new Course(courseFromCrawler);
    await course.save();
    await User.findOneAndUpdate(
      { _id: userId },
      {
        $push: {
          courses: {
            course: course,
            progress: progress,
          },
        },
      }
    );
    res.end();
  } else {
    const courseInUser = await User.findOne({
      _id: userId,
      "courses.course": course._id,
    });
    if (courseInUser) {
        console.log('course in user')
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId, "courses.course": course._id },
        {
            $set: {
                "courses.$.progress": progress,
            },
        },
        { new: true }
        );
        
        res.send(updatedUser);
    } else {
        console.log('course not in user')
        await User.findOneAndUpdate(
            { _id: userId },
            {
          $push: {
            courses: {
              course: course,
              progress: progress,
            },
          },
        }
      );
    }
    res.send(course)
  }
});

module.exports = router;
