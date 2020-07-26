const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const Course = require('./models/Course')
const Provider = require('./models/Provider')
const User = require('./models/User')
require('dotenv').config()
mongoose.connect("mongodb+srv://onlife_admin:0NL!feD8Pa55@onlife.lb5bu.mongodb.net/onlife?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })



const app = express()

app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const { PORT } = process.env
app.listen(PORT, () => {
console.log(`Server is up on port ${ PORT }`)
})







