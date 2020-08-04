import { AppService } from '../model/APPService.js'
import { CourseList } from '../model/CourseList.js'
import { User } from '../model/User.js'

export class App {
  constructor(){
    let loggedUser = {loggedUser:{username:'',userID:''}}
    if(localStorage.onLife){
      loggedUser = JSON.parse(localStorage.onLife)
    }
    
    this.appService = new AppService()
    this.currentLoggedUser = new User(loggedUser.loggedUser.userID, loggedUser.loggedUser.username)
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
  setCurrentSearchTerm(searchTerm){
    this.searchCourseList.searchTerm = searchTerm
  }
  clearCurrentSearchTerm(){
    this.searchCourseList.searchTerm = ''
  }

  getSingleCourse = (courseId) => {
    return this.searchCourseList.getCourseById(courseId, false)
  }

  getCurrentUserData = async () => {
    const userData = await this.appService.fetchUserInfoFromDB(this.currentLoggedUser.id)
    return userData
  }

  getCurrentUserJobs = async () => {
    return await this.appService.fetchUserJobsFromDB(this.currentLoggedUser.id)
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
    this.currentLoggedUser.id = userID
    this.currentLoggedUser.username = username
    localStorage.setItem('onLife', JSON.stringify({loggedUser:{username,userID}}))
  }
  logUserOut(){
    this.currentLoggedUser = {loggedUser:{username:'',userID:''}}
    localStorage.removeItem('onLife');
  }

}

