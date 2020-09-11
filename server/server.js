const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require("./api/routes/userRoutes");
const coursesRouter = require("./api/routes/courseRoutes");
const extensionRouter = require("./api/routes/extensionRoutes");
const authRouter = require('./api/routes/authRoutes')
require('dotenv').config()

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/api/user", userRouter);
app.use("/api/courses", coursesRouter);
app.use("/extension", extensionRouter);
app.use("/auth", authRouter)

const { PORT } = process.env
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})