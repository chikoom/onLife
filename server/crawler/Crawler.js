const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const parseUdemyScrape = require('./parseFunction/parseFunctions')

class Crawler {
    constructor() {
        this.templates = [
            {
                provider: 'Udemy',
                url: "https://www.udemy.com/courses/development/web-development/",
                shortUrl: "https://www.udemy.com",
                parseFnc: parseUdemyScrape
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

    async Crawl(url) {
        const browser = await puppeteer.launch()
        const mainPage = await browser.newPage()
        await mainPage.goto(url, { waitUntil: 'networkidle2' })
        await mainPage.evaluate(() => {
            window.scrollTo(0, 2700)
        })
        await mainPage.waitFor(10000)
    
    
        const content = await mainPage.content()
        const $ = cheerio.load(content)
        const list = $('div[class="course-list--container--3zXPS"]')
            .find('div > div > a')
            .toArray()
            .map(a => $(a).attr('href'))
            .filter(a => a !== 'https://business.udemy.com/request-demo/?ref=right-rail&locale=en_US')
            .slice(0, 10)
        
        list.forEach(p => test2(p, browser))
    }
}

module.exports = Crawler