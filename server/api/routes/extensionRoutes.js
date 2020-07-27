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
    let { userId, providerId, providerCourseId } = req.params
    const { userId, providerName, courseURL, progress } = req.body
    const courseId = await Course.findOne({providerCourseId: providerCourseId}, {id: 1})
    const courseToUpdate = await User.findOneAndUpdate({"_id": userId, "courses.course": courseId._id}, { "$set": {
        "courses.$.progress": progress
    }}, { new: true })

    console.log(courseToUpdate)
    res.send(courseToUpdate)
});     

// 

module.exports = router