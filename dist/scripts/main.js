import { App } from '../model/App.js'
import { Render } from '../view/Render.js'
const app = new App()
const renderer = new Render()


const handlePageClick = async function(){
  const currentFilters = app.getCurrentFilters()
  currentFilters.currentPageNumber = parseInt($(this).text())
  handleSearch()
}

const handleSearch = async function(){
  const currentFilters = app.getCurrentFilters()
  if(!$(this).hasClass('page-number')){
    currentFilters.currentPageNumber = 1
  }
  
  currentFilters.minPrice = $('#input-min-price').val()
  currentFilters.maxPrice = $('#input-max-price').val()
  currentFilters.sorting = $('#select-sorting').val()
  let checkedProviders = []
  $('.checkbox-provider:checked').each(function(){
    checkedProviders.push($(this).val())
  })

    
  currentFilters.selectedProviders = checkedProviders





  const searchQuery = $(this).siblings('.input-search').val() || app.getCurrentSeachTerm()
  const searchResults = await app.getSearchResults(searchQuery,currentFilters.minPrice,currentFilters.maxPrice,currentFilters.sorting,currentFilters.currentPageNumber,currentFilters.selectedProviders)
  
  

  renderer.render('search', { 
                              courses: searchResults.courses,
                              pageNumber:1,
                              sortOption:'relevance',
                              allProviders: searchResults.courses.providers,
                              selectedProviders: currentFilters.selectedProviders,
                              filteredMinPrice : currentFilters.minPrice,
                              filteredMaxPrice : currentFilters.maxPrice,
                              currentPageNumber : currentFilters.currentPageNumber,
                              filteredSorting : currentFilters.sorting,
                              filteredProviders : currentFilters.providers,
                              searchQuery: searchResults.searchTerm
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



$('body').on('click','.page-number', handlePageClick)
$('body').on('change','.checkbox-provider', handleSearch)
$('body').on('click', '#select-sorting', handleSearch)
$('body').on('click', '#select-sorting', handleSearch)
$('body').on('click', '.button-apply-filters', handleSearch)
$('body').on('click', '#button-back-to-search', handleSearch)
$('#logo-container').on('click', handleGoToHome)
$('body').on('click', '.button-search', handleSearch)
$('.search-container').on('click', '#search-result-course-details', handleSingleCourse)
$('body').on('click', '.button-username', handleUsernameClick)

init()