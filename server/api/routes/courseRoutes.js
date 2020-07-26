const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const router = express.Router();

router.get("/:userId", async (req, res) => {
    let { userId } = req.params
    // console.log(userId)
    let courses = await User.find({'_id': userId}, {'courses': 1}).populate('courses.course')
    res.send(courses)
}); 

module.exports = router

// GET /api/user/courses/:userId
// req.body { sort: relevnce / completedFirst, uncompletedFirst }
// gets the populated list of courses for a user
// returns a sorted array of courses {course, progress}