export class CourseList {
  constructor(courses, isUser){
    this.isUser = false || isUser
    this.courses = courses || []
    this.searchTerm = ""
  }
  getAllCourses(isUser){
    return this.courses
  }
  getCourseById(courseId, isUser){
    if(!isUser){
      return this.courses.find(course => course._id === courseId)
    }
  }

}
console.log('CourseList loaded')