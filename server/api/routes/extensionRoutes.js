// PUT /extension/progress/:userId/:providerId/:providerCourseId
// updates the progress for a specific course
// req.body.progress = number between 0 to 1
// returns the updated object {course, progress}

const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const router = express.Router();


router.put("/progress/:userId/:providerId/:providerCourseId", async (req, res) => {
    let { userId, providerId, providerCourseId } = req.params
    console.log(req.params)
    res.send()
}); 

module.exports = router