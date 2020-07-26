export class CourseList {
  constructor(){
    this.courses = []
    this.searchTerm = ""
  }
  getAllCourses(isUser){
    if(!isUser){
      return this.courses
    }
  }
  getCourseById(courseId, isUser){
    if(!isUser){
      return this.courses.find(course => course._id === courseId)
    }
  }

}
console.log('CourseList loaded')