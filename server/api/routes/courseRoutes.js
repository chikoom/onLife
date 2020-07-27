const request = require("request");
const express = require("express");
const User = require("../../models/User");
const Course = require("../../models/Course");
const Provider = require("../../models/Provider");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.query);
  let searchQuery = req.query.q;
  let { minPrice } = req.query;
  let { maxPrice } = req.query;
  let { sorting } = req.query;

  minPrice = minPrice || 0
  maxPrice = maxPrice || 10000

//   const sortMethod
//   sorting === 'relevance' ? sortMethod = '' : sorting === 'low-high' ? 

const coursesQuery = await Course.find({
    $and: [
      { name: { $regex: searchQuery, $options: "i" } },
      { $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }] },
    ],
  })
    .populate("provider")
    .limit(10).sort(sortMethod)
    
    const courseWithMaxPrice = await Course.findOne({
        $and: [
          { name: { $regex: searchQuery, $options: "i" } },
          { $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }] },
        ],
      }).sort('-price')

      console.log()

    const providersFromDB = await Provider.find({}, {"name": 1})
    const providers = providersFromDB.map(provider => provider.name)


  const response = {
    courses: coursesQuery,
    providers: providers,
    maxPrice: courseWithMaxPrice.price,
    totalCourses: coursesQuery.length,
  };
  res.send(response);
});

module.exports = router;
