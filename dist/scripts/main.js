import { AppService } from '../model/APPService.js'
import { User } from '../model/User.js'
import { Course } from '../model/Course.js'
import { CourseList } from '../model/CourseList.js'
import { App } from '../model/App.js'
import { Render } from '../view/Render.js'

const dummyUserData = {
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

const renderer = new Render()

console.log('main')

const handleSearch = function(){
  const searchQuery = $('.input-search').val()
  // get sorting
  // App.getSearchResults(searchQuery)
  renderer.render('search', { 
                              courses: dummyCourses,
                              pageNumber:1,
                              sortOption:'relevance'
                            })
}

const handleSingleCourse = function(event){
  event.preventDefault()
  const courseId = $(this).closest('.search-result-container').data('course-id')
  // App.getSingleCourse(courseId)
  console.log(courseId)
  renderer.render('course', dummyCourses[0])
}

const handleUsernameClick = function(event){
  event.preventDefault()
  console.log('username')
  // App.getCurrentUserData()
  // App.getCurrentUserCourses()
  //invokes render(user, data:{username, totalCourses, completedCourses, overallprogress})
  //invokes render(userCourses, data:{courses})
  renderer.render('user', dummyUserData)
  renderer.render('userCourses', dummyUserCourses)
}

const handleGoToHome = function(){
  renderer.render('home', {})
}



const init = () => {
  renderer.render('nav', {})
  renderer.render('home', {})
}

$('#logo-container').on('click', handleGoToHome)
$('.home-container').on('click', '#button-home-search', handleSearch)
$('.search-container').on('click', '#search-result-course-details', handleSingleCourse)
$('body').on('click', '.button-username', handleUsernameClick)

init()