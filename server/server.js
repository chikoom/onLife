const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })


const app = express()

app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const { PORT } = process.env
app.listen(PORT, () => {
console.log(`Server is up on port ${ PORT }`)
})

