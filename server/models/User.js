const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
userName: String,
password: String,
courses: [{course: {type: Schema.Types.ObjectId, ref: 'Course'}, progress: Number}]
})

const User = mongoose.model('User', UserSchema)
module.exports = User
