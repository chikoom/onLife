import { AppService } from '../model/APPService.js'
import { CourseList } from '../model/CourseList.js'
import { User } from '../model/User.js'

export class App {
  constructor(){
    this.appService = new AppService()
    this.currentLoggedUser = new User(dummyUserData.id, dummyUserData.username)
    this.searchCourseList = new CourseList()
    this.currentSingleCourse = {}
  }

  getSearchResults = (searchQuery) => {
    // appService.fetchSearchResultsFromDB
    this.searchCourseList.courses = dummyCourses
    this.searchCourseList.searchTerm = searchQuery
    return {
      courses: this.searchCourseList.getAllCourses(false),
      searchTerm: this.searchCourseList.searchTerm
    }
  }

  getSingleCourse = (courseId) => {
    console.log(courseId)
    return this.searchCourseList.getCourseById(courseId, false)
  }

  getCurrentUserData = () => {
    // appService.fetchUserInfoFromDB(this.currentLoggedUser.id)
    const userData = dummyUserData
    return dummyUserData
  }

  getCurrentUserCourses = () => {
    // appService.fetchUserCoursesFromDB(this.currentLoggedUser.id)
    this.currentLoggedUser.courses = new CourseList(dummyUserCourses, true)
    return this.currentLoggedUser.courses.getAllCourses()
  }
}




const dummyUserData = {
  id: '324hjg432j4gh',
  username: 'Chikoom',
  totalCourses: 15,
  completedCourses: 7,
  overallProgress: 0.66
}

const dummyUserCourses = [{
  progress: 0.5,
  course: {
    _id: '3423v32fdv34v34vt',
    providerCourseId: "435345346",
    name: "Javascript for Dummies",
    slug: "The great course ever",
    description: "The great course ever The great course ever The great course ever The great course ever The great course ever The great course ever The great course ever",
    price: 500,
    currency: "USD",
    provider: {
        name: "Udemy",
        homepageURL: "www.udemy.com",
        iconURL: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
    },
    language: "EN-US",
    subtitlesLanguages: ["EN-US", "HE-IL"],
    lessons: [{name: "Lesson 1", description: "String String String"}, {name: "Lesson 2", description: "String String String"}],
    imageURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
    videoURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
    courseURL: "https://www.udemy.com/course/the-complete-javascript-course/" 
  }
},
{
  progress: 0.88,
  course: {
    _id: '3423v32fdv34v34vt',
    providerCourseId: "435345346",
    name: "Javascript for Dummies",
    slug: "The great course ever",
    description: "The great course ever The great course ever The great course ever The great course ever The great course ever The great course ever The great course ever",
    price: 500,
    currency: "USD",
    provider: {
        name: "Udemy",
        homepageURL: "www.udemy.com",
        iconURL: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
    },
    language: "EN-US",
    subtitlesLanguages: ["EN-US", "HE-IL"],
    lessons: [{name: "Lesson 1", description: "String String String"}, {name: "Lesson 2", description: "String String String"}],
    imageURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
    videoURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
    courseURL: "https://www.udemy.com/course/the-complete-javascript-course/" 
  }
}]

const dummyCourses = [{
  _id: '3423v32fdv34v34vt',
  providerCourseId: "435345346",
  name: "Javascript for Dummies",
  slug: "The great course ever",
  description: "The great course ever The great course ever The great course ever The great course ever The great course ever The great course ever The great course ever",
  price: 500,
  currency: "USD",
  provider: {
      name: "Udemy",
      homepageURL: "www.udemy.com",
      iconURL: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  },
  language: "EN-US",
  subtitlesLanguages: ["EN-US", "HE-IL"],
  lessons: [{name: "Lesson 1", description: "String String String"}, {name: "Lesson 2", description: "String String String"}],
  imageURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
  videoURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
  courseURL: "https://www.udemy.com/course/the-complete-javascript-course/" 
},
{
  _id: '3423v32fdv34v34vt',
  providerCourseId: "435345346",
  name: "Javascript for Experts",
  slug: "The worst course ever",
  description: "The worst course ever The worst course ever The worst course ever The worst course ever The worst course ever The worst course ever The worst course ever",
  price: 200,
  currency: "USD",
  provider: {
      name: "Udemy",
      homepageURL: "www.udemy.com",
      iconURL: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  },
  language: "EN-US",
  subtitlesLanguages: ["EN-US", "HE-IL"],
  lessons: [{name: "Lesson 1", description: "String String String"}, {name: "Lesson 2", description: "String String String"}],
  imageURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
  videoURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
  courseURL: "https://www.udemy.com/course/the-complete-javascript-course/" 
}]
