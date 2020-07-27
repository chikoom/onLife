export class CourseList {
  constructor(courses, isUser){
    this.isUser = false || isUser
    this.courses = courses || []
    this.searchTerm = ""
    this.filters = {
      minPrice:0,
      maxPrice:1000,
      sorting:'relevance',
      currentPageNumber:1,
      selectedProviders:[]
    }
  }
  getAllCourses(isUser){
    return this.courses
  }
  getCourseById(courseId, isUser){
    if(!isUser){
      return this.courses.courses.find(course => course._id === courseId)
    }
  }

}
