const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseSchema = new Schema({
    providerCourseId: String,
    name: String,
    slug: String,
    description: String,
    price: Number,
    currency: String,
    provider: {type: Schema.Types.ObjectId, ref: 'Provider'},
    language: String,
    subtitlesLanguages: [String],
    lessons: [{name: String, description: String}],
    imageURL: String,
    videoURL: String,
    courseURL: String
})

const Course = mongoose.model('Course', CourseSchema)
module.exports = Course