import { AppService } from '../model/APPService.js'
import { CourseList } from '../model/CourseList.js'
import { User } from '../model/User.js'

export class App {
  constructor(){
    let loggedUser =  {username:'', password:''}
    if(localStorage.loggedUser){
      loggedUser = JSON.parse(localStorage.loggedUser)
    }
    
    this.appService = new AppService()
    this.currentLoggedUser = new User(loggedUser.userID, loggedUser.userID.username)
    this.searchCourseList = new CourseList()
    this.currentSingleCourse = {}
  }
  getSearchResults = async (searchQuery,minPrice,maxPrice,sorting,pageNumber,providers) => {
    const searchResults = await this.appService.fetchSearchResultsFromDB(searchQuery,minPrice,maxPrice,sorting,pageNumber,providers)
    this.searchCourseList.courses = searchResults
    this.searchCourseList.searchTerm = searchQuery
    return {
      courses: this.searchCourseList.getAllCourses(false),
      searchTerm: this.searchCourseList.searchTerm
    }
  }

  getCurrentSeachTerm(){
    return this.searchCourseList.searchTerm
  }

  getSingleCourse = (courseId) => {
    return this.searchCourseList.getCourseById(courseId, false)
  }

  getCurrentUserData = async () => {
    const userData = await this.appService.fetchUserInfoFromDB(this.currentLoggedUser.id)
    return userData
  }

  getCurrentUserCourses = async () => {
    const userCourses = await this.appService.fetchUserCoursesFromDB(this.currentLoggedUser.id)
    this.currentLoggedUser.courses = new CourseList(userCourses.courses, true)
    return this.currentLoggedUser.courses.getAllCourses()
  }

  getCurrentFilters = () => {
    return this.searchCourseList.filters
  }
  loginSignup = async (buttonVal, username, password) => {
    if(buttonVal === 'login'){
      return await this.appService.loginToDB(username, password)
    }
    if (buttonVal === 'signup'){
      return await this.appService.signupToDB(username, password)
    }
    return
  }
  logUserIn(username, userID){
    console.log(username)
    console.log(userID)
    this.currentLoggedUser.id = userID
    this.currentLoggedUser.username = username
    localStorage.setItem('loggedUser', JSON.stringify({username,userID}))
  }
}

