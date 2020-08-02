const request = require('request-promise')
const cheerio = require('cheerio')

class SimpleCrawler{
  constructor(){
    this.scrapeTemplates = [
      {
        provider: 'LinkedIn',
        scraping:
        {
            categoriesURLs: [
              "https://www.linkedin.com/learning/topics/programming-languages",
              "https://www.linkedin.com/learning/topics/front-end-web-development",
              "https://www.linkedin.com/learning/topics/devops-foundations"
            ],
            shortUrl: "https://www.linkedin.com/",
            //parseFnc: parseUdemyScrape,
            //singleCourseUrlParse: parseUdemySingleCourseUrls,
            //pageActions: udemyPageActionsFunction
        }
      }
    ]
  }
  getCoursesLinksFromCategory_LinkedIn = (HTML) => {
    const $ = cheerio.load(mainHTML)
    const CoursesLinks = $('.results-list__item').map((i, element)=>{
      const $link = $(element).find('.base-search-card')
      const linkHref = $link.attr('href')
      const paramIndex = linkHref.indexOf('?')
      const cleanURL = linkHref.substring(0,paramIndex)
      return cleanURL
    }).get()
    return CoursesLinks
  }
  scrapeCoursesFromCategoryPage = async (categoryURL) => {
    try {
      const mainHTML = await request(categoryURL)
      CoursesLinks = getCoursesLinksFromCategory_LinkedIn(mainHTML)
      const coursesData = await Promise.all(CoursesLinks.map(scrapeSingleCourse))
      console.log('DATA TO SAVE', coursesData)
    } catch (error) {
      console.log('SCRAPE ERROR', error)
    }
  }
  scrapeSingleCourse = async (courseURL) => {
    try {
      const cousreHTML = await request(courseURL)
      const $ = cheerio.load(cousreHTML)

      const courseName = $('.top-card-layout__title').text().trim()
      const courseDescriptionFull = $('.section-container__description').text().trim()
      const descFirstSentenceIndex = courseDescriptionFull.indexOf('.')
      const courseSlug = courseDescriptionFull.substring(0, descFirstSentenceIndex)
      const descFirstLineBreakIndex = courseDescriptionFull.indexOf('Download the files') 
      const courseDescription = courseDescriptionFull.substring(0, descFirstLineBreakIndex)
      const imageURL = $("meta[name='twitter:image']").attr("content")

      const lessons = $('.video__title').map((i, element)=>{
        return {
          name: $(element).text().trim(),
          description: ''
        }
      }).get()
      
      return {
        name: courseName,
        slug: courseSlug,
        description:courseDescription,
        price:'29.99/m',
        currency:'USD',
        language:'English',
        subtitlesLanguages:['English'],
        lessons: lessons,
        imageURL: imageURL,
        videoURL: '',
        courseURL: link
      }
      
    } catch (error) {
      console.log('COURSE SCRAPE ERROR', error)
    }
  }

}
