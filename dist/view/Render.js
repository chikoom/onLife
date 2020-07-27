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
    if(areaName==='user'){
      console.log('TOT '+data.overallProgress)
      this.renderChart(data.overallProgress)
    }
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
    console.log('Renderer Clearing the filters')
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
  console.log(currentProvider)
  console.log(checkedProviders)
  return "hey"
})


