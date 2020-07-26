export class Render {
  constructor(){
    this.templates = {
      nav: Handlebars.compile($(`#nav-template`).html()),
      home: Handlebars.compile($(`#home-template`).html()),
      search: Handlebars.compile($(`#search-template`).html()),
      course: Handlebars.compile($(`#course-template`).html()),
      user: Handlebars.compile($(`#user-template`).html()),
      userCourses: Handlebars.compile($(`#userCourses-template`).html()),
      loginSignup: Handlebars.compile($(`#loginSignup-template`).html())  
    }
  }
  render(areaName, data){
    console.log(`Rendering ${areaName} with data:`)
    console.log(data)
    this.renderClearAreas(areaName)
    const renderHTML = this.templates[areaName]({ data })
    $(`.${areaName}-container`).empty().append(renderHTML)
  }
  renderClearAreas(currentRender){
    switch(currentRender){
      case 'nav':
        break
      case 'home':
        $('.nav-searchbar').empty()
        $('.search-container').empty()
        $('.course-container').empty()
        $('.user-container').empty()
        $('.userCourses-container').empty()
        break
      case 'search':
        $('.home-container').empty()
        $('.course-container').empty()
        $('.user-container').empty()
        $('.userCourses-container').empty()
        break
      case 'course':
        $('.home-container').empty()
        $('.search-container').empty()
        $('.user-container').empty()
        $('.userCourses-container').empty()
        break
      case 'user':
        $('.home-container').empty()
        $('.search-container').empty()
        $('.course-container').empty()
        break
      case 'userCourses':
        $('.home-container').empty()
        $('.search-container').empty()
        $('.course-container').empty()
        break
      default:
        break
    }
  }
  renderClearSearchFilters(){
    console.log('Renderer Clearing the filters')
  }
}

Handlebars.registerHelper('progressBar', function(opts) {
  let decNumber = opts.fn(this)
  decNumber = decNumber*100
  return decNumber
})

