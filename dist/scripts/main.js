import { App } from '../model/App.js'
import { Render } from '../view/Render.js'
const app = new App()
const renderer = new Render()

const handleSearch = async function(){

  const currentFilters = app.getCurrentFilters()
  console.log(currentFilters)

  const minPrice = $('#input-min-price').val() || currentFilters.minPrice
  currentFilters.minPrice = minPrice
  const maxPrice = $('#input-max-price').val() || currentFilters.maxPrice
  currentFilters.maxPrice = maxPrice
  const sorting = 0 || currentFilters.sorting
  currentFilters.sorting = sorting
  const pageNumber = 0 || currentFilters.pageNumber
  currentFilters.pageNumber = pageNumber
  const searchQuery = $(this).siblings('.input-search').val() || app.getCurrentSeachTerm()

  
  
  

  //const providers = currentFilters.providers.join()
  

  console.log('SEARCHING')
  console.log('q:'+searchQuery)
  console.log('mp:'+minPrice)
  console.log('xp:'+maxPrice)
  console.log('srt:'+sorting)
  console.log('pg:'+pageNumber)
  console.log('pr:'+providers)


  const searchResults = await app.getSearchResults(searchQuery,minPrice,maxPrice,sorting,pageNumber,providers)
  
  const selectedProviders = []
  if($('.checkbox-provider')){
    $('.checkbox-provider:checked').each(function(){
      selectedProviders.push($(this).val())
    })
  } else {
    searchResults.courses.Providers.forEach(provider => selectedProviders.push(provider))
  }
  
  const newProviders = searchResults.courses.Providers.map(provider => {
    let checked = (selectedProviders.includes(provider))?'checked':''
    return {
      provider, checked
    }
  })
  searchResults.courses.Providers = newProviders
  console.log('SEARCH RESULTS')
  console.log(searchResults)
  currentFilters.providers = currentFilters.providers.providers
  renderer.render('search', { 
                              courses: searchResults.courses,
                              pageNumber:1,
                              sortOption:'relevance',
                              filteredMinPrice : currentFilters.minPrice,
                              filteredMaxPrice : currentFilters.maxPrice,
                              filteredPageNumber : currentFilters.pageNumber,
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

$('body').on('click', '.button-apply-filters', handleSearch)
$('body').on('click', '#button-back-to-search', handleSearch)
$('#logo-container').on('click', handleGoToHome)
$('body').on('click', '.button-search', handleSearch)
$('.search-container').on('click', '#search-result-course-details', handleSingleCourse)
$('body').on('click', '.button-username', handleUsernameClick)

init()