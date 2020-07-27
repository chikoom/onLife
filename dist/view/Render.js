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

    this.renderClearAreas(areaName)
    const renderHTML = this.templates[areaName]({ data })
    $(`.${areaName}-container`).empty().append(renderHTML)
    if(areaName==='user'){
      this.renderChart(data.overallProgress)
    }
    if(areaName==='search'){
      console.log(data)
      this.renderProviders(data.allProviders, data.selectedProviders)
      this.renderPagination(data.courses.totalCourses, data.searchQuery, data.currentPageNumber)
    }
  }

  renderPagination(totalResults, searchQuery, currentPageNumber){
    $('#field-total-results').text(totalResults)
    $('#field-serach-query').text(searchQuery)
    let numOfPages = Math.floor(totalResults/10)
    let addOn = (totalResults%10 === 0)? 0:1;
    $('.search-pagination-numbers').empty()
    for(let i = 1; i <=numOfPages+addOn ; i++){
      let classSelected = (currentPageNumber == i)?"page-selected":""
      $('.search-pagination-numbers').append($(`<span class="page-number ${classSelected}">${i}</span>`))
    }
    
  }

  renderProviders(allProviders, selectedProviders, currentPageNumber){
    $('.search-filters-providers').empty()
    allProviders.forEach(provider => {
      let checked = (selectedProviders.includes(provider))? "checked" :""
      $('.search-filters-providers').append($(`
      <div class="filter-provider-container">
        <input type="checkbox" class="checkbox-provider" value="${provider}" ${checked}><span class="filter-provider-name">${provider}</span>
      </div>
      `))
    })
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
        break
      case 'course':
        $('.nav-searchbar').empty()
        $('.home-container').empty()
        $('.search-container').empty()
        $('.user-container').empty()
        $('.userCourses-container').empty()
        break
      case 'user':
        $('.nav-searchbar').empty()
        $('.home-container').empty()
        $('.search-container').empty()
        $('.course-container').empty()
        break
      case 'userCourses':
        $('.nav-searchbar').empty()
        $('.home-container').empty()
        $('.search-container').empty()
        $('.course-container').empty()
        break
      default:
        break
    }
  }
  renderClearSearchFilters(){
  }

  renderChart(totalProgress){
    let chart = am4core.create("user-progress-chart", am4charts.PieChart);
    chart.data = [
      { "size": 1-totalProgress , "color": am4core.color("#95a5a6")},
      { "size": totalProgress , "color": am4core.color("#2ecc71")}
    ]
    chart.innerRadius = 75;
    let label = chart.seriesContainer.createChild(am4core.Label);
    label.text = `${Math.round(totalProgress*100)}%`;
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 20;

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.slices.template.propertyFields.fill = "color";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.tooltipText = "";
    pieSeries.dataFields.value = "size";

  }

}

Handlebars.registerHelper('progressBar', function(opts) {
  let decNumber = opts.fn(this)
  decNumber = decNumber*100
  return decNumber
})

Handlebars.registerHelper('checkChecked', function(currentProvider, checkedProviders) {
  return "hey"
})

Handlebars.registerHelper('priceFormater', function(opts) {
  let priceNumber = opts.fn(this)
  priceNumber = (priceNumber > 0) ? `$${priceNumber}`: 'FREE'
  return priceNumber
})


