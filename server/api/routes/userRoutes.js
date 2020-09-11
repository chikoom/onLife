const request = require('request')
const express = require('express')
const User = require('../../models/User')
const Course = require('../../models/Course')
const router = express.Router()

router.get('/:userId', async (req, res) => {
  let { userId } = req.params
  const user = await User.findById(userId).populate({
    path: 'courses',
    populate: 'course',
  })
  try {
    let returnData
    if (user) {
      let username = user.userName
      let userCoursesArray = user.courses
      let numberOfCourses = userCoursesArray.length
      let numOfCompletedCourses = user.courses.filter(
        (course) => course.progress === 1
      ).length
      let overallProgress = 0
      userCoursesArray.forEach((course) => (overallProgress += course.progress))
      overallProgress /= numberOfCourses
      if (!numberOfCourses) {
        returnData = {
          username,
          numberOfCourses: 0,
          numOfCompletedCourses: 0,
          overallProgress: 0,
        }
        res.send(returnData)
      } else {
        returnData = {
          userId,
          username,
          numberOfCourses,
          numOfCompletedCourses,
          overallProgress: overallProgress.toFixed(2),
        }

        res.send(returnData)
      }
    } else {
      res.send(`error: can't find user`)
    }
  } catch (error) {
    console.log(error)
    res.send(`error: error getting user info`)
  }
})

router.get('/courses/:userId', async (req, res) => {
  let { userId } = req.params
  let courses = await User.findOne({ _id: userId }).populate({
    path: 'courses.course',
    populate: {
      path: 'provider',
    },
  })

  res.send(courses)
})

router.get('/jobs/:userId', async (req, res) => {
  let { userId } = req.params
  let jobsArray = []
  let searchDictionary = [
    'Web',
    'javascript',
    'node',
    'python',
    'PHP',
    'beginners',
    'dummies',
    'programming',
    'design',
    'Amazon',
    'Vue',
    'React',
    'Angular',
    'Mongoose',
    'MongoDB',
    'sql',
    'developer',
  ]
  let user = await User.findOne({ _id: userId }).populate({
    path: 'courses.course',
  })
  if (user.courses.length !== 0) {
    let courses = user.courses
    let userCoursesKeywords = courses.map((item) => {
      return item.course.name.toLowerCase()
    })
    let AllKeywords = userCoursesKeywords.join(' ')
    let searchParams = searchDictionary.filter((word) => {
      return AllKeywords.includes(word.toLowerCase())
    })
    if (searchParams.length !== 0) {
      let params = searchParams.join('&')
      await request(
        `https://jobs.github.com/positions.json?search=${params}`,
        { json: true },
        function (error, response, body) {
          if (error) {
            return console.log(err)
          }
          jobsArray = body
          let modifiedJobsArray = []
          jobsArray.forEach((job) => {
            modifiedJobsArray.push({
              title: job.title,
              company: job.company,
              type: job.type,
              apply: job.how_to_apply,
              logo: job.company_logo,
              url: job.url,
            })
          })
          res.send(modifiedJobsArray)
        }
      )
    } else {
      res.send('no matching keywords found')
    }
  } else {
    res.send('no courses were found - cannot recommend job offerings')
  }
})

module.exports = router
