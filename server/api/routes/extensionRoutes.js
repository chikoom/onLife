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
  const courseInDB = await Course.findOne({ courseURL: {"$regex": courseURL} });
  if (!courseInDB) {
    console.log("course not in DB, sent to crawler");
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
      console.log('in DB')
    const courseInUser = await User.findOne({
      _id: userId,
      "courses.course": courseInDB._id,
    });
    if (courseInUser) {
        console.log('User has this course')
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId, "courses.course": courseInDB._id },
        {
            $set: {
                "courses.$.progress": progress,
            },
        },
        { new: true }
        );
        
        res.send(updatedUser);
    } else {
        console.log(`User doesn't have this course`)
        await User.findOneAndUpdate(
            { _id: userId },
            {
          $push: {
            courses: {
              course: courseInDB,
              progress: progress,
            },
          },
        }
      );
      res.send('saved succesfully')
    }
  }
});

router.get("/getCourse/:courseId", async (req, res) => {
    const { courseId } = req.params
    const course = await Course.findById(courseId)
    courseURL = course.courseURL
    res.send(courseURL)

})

module.exports = router;
