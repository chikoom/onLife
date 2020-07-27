const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const router = express.Router();


router.get("/", async (req, res) => {
    console.log(req.query)
    let searchQuery = req.query.q
    let { minPrice } = req.query    
    let { maxPrice } = req.query    
    console.log(searchQuery)
    let totalCourses = await Course.find({'name': {"$regex": searchQuery, "$options": "i"}}).populate('provider').limit(10)
    res.send(courses)
}); 

module.exports = router

// {
// courses: [],
// allProviders: [],
// maxPrice: maxPrice,
// totalCourses
// }