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
  let { providers } = req.query;
  let { pageNumber } = req.query

  minPrice = minPrice || 0;
  maxPrice = maxPrice || 10000;
  pageNumber = pageNumber || 1

console.log(pageNumber)
  let sortMethod = "";
  sorting === "relevance"
    ? (sortMethod = "")
    : sorting === "lowHigh"
    ? (sortMethod = "price")
    : (sortMethod = "-price");

  const providersFromDB = await Provider.find({}, { name: 1 });
  const providerNames = providersFromDB.map((provider) => provider.name);

  !providers ? (providers = providerNames) : (providers = providers.split(','));


  const coursesQuery = await Course.find({
    $and: [
      { name: { $regex: searchQuery, $options: "i" } },
      { price: { $gte: minPrice, $lte: maxPrice } },
    ],
  })
    .populate("provider")
    .sort(sortMethod);
  const toSend = coursesQuery.filter((course) => providers.some(p => p == course.provider.name))

  const courseWithMaxPrice = await Course.findOne({
    $and: [
      { name: { $regex: searchQuery, $options: "i" } },
      { $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }] },
    ],
  }).sort("-price");


  const response = {
    courses: toSend.slice((pageNumber * 10 - 10), (pageNumber * 10)),
    providers: providerNames,
    maxPrice: courseWithMaxPrice.price,
    totalCourses: toSend.length,
  };
  res.send(response);
});

module.exports = router;
