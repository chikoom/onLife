const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const Course = require('./models/Course')
const Provider = require('./models/Provider')
const User = require('./models/User')
const userRouter = require("./api/routes/userRoutes");
const coursesRouter = require("./api/routes/courseRoutes");
const Crawler = require('./crawler/Crawler')

require('dotenv').config()
mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()

app.use("/api/user", userRouter);
app.use("/api/courses", coursesRouter);

app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const { PORT } = process.env
app.listen(PORT, () => {
console.log(`Server is up on port ${ PORT }`)
})