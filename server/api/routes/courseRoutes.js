const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const { populate } = require("../../models/Course");
const router = express.Router();


router.get("/", async (req, res) => {
    console.log(req.query)
    let searchQuery = req.query.q
    console.log(searchQuery)
    let courses = await Course.find({'name': {"$regex": searchQuery, "$options": "i"}}).populate('provider').limit(10)
    res.send(courses)
}); 

module.exports = router


// GET /api/courses/

// req.body { searchQuery, filters, sort, pageNumber }
// search for courses with the requested filters

// searchQuery - The search term (to find in course name)
// filters - { provider: provider name, minPrice: number, maxPrice: number }
// sort - { relevance / priceLowHigh / priceHighLow }
// pageNumber - limits to 10 results, skips 10*(pageNumber-1)

// returns array of 10 courses with full info (populates the provider)