const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const { parseUdemyScrape, parseUdemySingleCourseUrls, udemyPageActionsFunction } = require('./parseFunction/parseFunctionsUdemy')
const { parseUdacityScrape, parseUdacitySingleCourseUrls, udacityPageActionsFunction} = require('./parseFunction/parseFunctionsUdacity')
const Course = require('../models/Course')

class Crawler {
    constructor() {
        this.scrapeTemplates = [
            {
                provider: 'udemy',
                scraping:
                {
                    url: "https://www.udemy.com/courses/development/web-development/?p=2",
                    shortUrl: "https://www.udemy.com",
                    parseFnc: parseUdemyScrape,
                    singleCourseUrlParse: parseUdemySingleCourseUrls,
                    pageActions: udemyPageActionsFunction
                }
            },
            {
                provider: 'udacity',
                scraping:
                {
                    url: 'https://www.udacity.com/courses/all',
                    shortUrl: 'https://www.udacity.com',
                    parseFnc: parseUdacityScrape,
                    singleCourseUrlParse: parseUdacitySingleCourseUrls,
                    pageActions: udacityPageActionsFunction
                }
            }
        ]
    }

    async addSingleCourseByProviderName(providerName, endPoint) {
        const { shortUrl, parseFnc } = this.getScrapingTemplateByName(providerName).scraping
        const browser = await puppeteer.launch()

        return await this.SingleCourseScrape(browser, shortUrl, endPoint, parseFnc)
    }

    async SingleCourseScrape(browser, shortUrl, endPoint, parseFnc) {
        const page = await browser.newPage()
        await page.goto(shortUrl + endPoint, { waitUntil: 'networkidle2' })
        const content = await page.content()
        return await parseFnc(content)
    }

    async scrapeCourseListPage(scrapeTemplate) {
        const { url, singleCourseUrlParse, shortUrl, parseFnc, pageActions } = scrapeTemplate

        const browser = await puppeteer.launch({ headless: false })

        const mainPage = await browser.newPage()
        await mainPage.goto(url, { waitUntil: 'networkidle2' })

        await pageActions(mainPage)

        const content = await mainPage.content()
        const $ = cheerio.load(content)

        const listOfCourseUrls = await singleCourseUrlParse($)
        const listOfParsedData = await Promise.all(listOfCourseUrls.map(p => this.SingleCourseScrape(browser, shortUrl, p, parseFnc)))

        await mainPage.waitFor(60000)
        await browser.close()
        return listOfParsedData
    }

    getScrapingTemplateByName(providerName) {
        return this.scrapeTemplates.find(t => t.provider === providerName.toLowerCase())
    }

    async RIPPC() {
        return await Promise.all(this.scrapeTemplates.map(s => this.scrapeCourseListPage(s.scraping)))
    }

    async saveAllReturnCourses() {
        (await this.RIPPC())
            .forEach(a => 
                    a.forEach(c => {
                        if (c === null) {
                            return
                        }
                        const course = new Course(c)
                        course.save()
                    }))
    }
}

module.exports = Crawler