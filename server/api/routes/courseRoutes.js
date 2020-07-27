const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const router = express.Router();


router.get("/", async (req, res) => {
    console.log(req.query)
    let searchQuery = req.query.q
    console.log(searchQuery)
    let courses = await Course.find({'name': {"$regex": searchQuery, "$options": "i"}}).populate('provider').limit(10)
    res.send(courses)
}); 

module.exports = router