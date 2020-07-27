const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const { response } = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    console.log(req.query)
    let searchQuery = req.query.q
    let { minPrice } = req.query    
    let { maxPrice } = req.query    
    console.log(searchQuery)
    let coursesQuery = await Course.find({'name': {"$regex": searchQuery, "$options": "i"}}).populate('provider').limit(10)
    const response = {
    "courses": coursesQuery,
    "Providers": ["Udemy", "udacity"],
    "maxPrice": 1000,
    "totalCourses": coursesQuery.length
    }
    res.send(response)
}); 

module.exports = router
