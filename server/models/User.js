const mongoose = require('mongoose')
const Schema = mongoose.Schema


const nameSchema = new Schema({

})

const name = mongoose.model('name', nameSchema)
module.exports = name