export class CourseList {
  constructor(courses, isUser){
    this.isUser = false || isUser
    this.courses = courses || []
    this.searchTerm = ""
    this.filters = {
      minPrice:0,
      maxPrice:100000000,
      sorting:'relevance',
      pageNumber:1,
      providers:['udemy,udacity']
    }
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