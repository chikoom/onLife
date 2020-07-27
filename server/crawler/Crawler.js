const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const { parseUdemyScrape, parseUdemySingleCourseUrls } = require('./parseFunction/parseFunctions')

class Crawler {
    constructor() {
        this.scrapeTemplates = [
            {
                provider: 'Udemy',
                url: "https://www.udemy.com/courses/development/web-development/",
                shortUrl: "https://www.udemy.com",
                parseFnc: parseUdemyScrape,
                singleCourseUrlParse: parseUdemySingleCourseUrls
            }
        ]
    }

    async SingleCourseScrape(browser, shortUrl, endPoint, parseFnc) {
        const page = await browser.newPage()
        await page.goto(shortUrl + endPoint, { waitUntil: 'networkidle2' })
        await page.waitFor(10)
        const content = await page.content()
        return await parseFnc(content)
    }

    async scrapeCourseListPage(scrapeTemplate) {
        const { url, singleCourseUrlParse, shortUrl, parseFnc } = scrapeTemplate

        const browser = await puppeteer.launch({ headless: false })

        const mainPage = await browser.newPage()
        await mainPage.goto(url, { waitUntil: 'networkidle2' })

        await mainPage.evaluate(() => {
            window.scrollTo(0, 2700)
        })
        await mainPage.waitFor(10000)

        const content = await mainPage.content()
        const $ = cheerio.load(content)

        const listOfCourseUrls = await singleCourseUrlParse($)
        return await Promise.all(listOfCourseUrls.map(p => this.SingleCourseScrape(browser, shortUrl, p, parseFnc)))
    }

    async RIPPC() {
        this.scrapeTemplates.forEach(s => this.scrapeCourseListPage(s))
    }
}

module.exports = Crawler