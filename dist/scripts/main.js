import { App } from '../model/App.js'
import { Render } from '../view/Render.js'
const app = new App()
const renderer = new Render()

const handleSearch = async function(){
  const searchQuery = $(this).siblings('.input-search').val()
  const searchResults = await app.getSearchResults(searchQuery)
  renderer.render('search', { 
                              courses: searchResults.courses,
                              pageNumber:1,
                              sortOption:'relevance'
                            })
  renderer.render('nav', { searchTerm: searchResults.searchTerm })
}

const handleSingleCourse = function(event){
  event.preventDefault()
  const courseId = $(this).closest('.search-result-container').data('course-id')
  const singleCourse = app.getSingleCourse(courseId)
  renderer.render('course', singleCourse)
}

const handleUsernameClick = async function(event){
  event.preventDefault()
  console.log('username')
  const userData = await app.getCurrentUserData()
  const userCourses = await app.getCurrentUserCourses()
  renderer.render('user', userData)
  renderer.render('userCourses', userCourses)
}

const handleGoToHome = function(){
  renderer.render('home', {})
}

const init = () => {
  renderer.render('nav', {})
  renderer.render('home', {})
}

$('#logo-container').on('click', handleGoToHome)
$('body').on('click', '.button-search', handleSearch)
$('.search-container').on('click', '#search-result-course-details', handleSingleCourse)
$('body').on('click', '.button-username', handleUsernameClick)

init()