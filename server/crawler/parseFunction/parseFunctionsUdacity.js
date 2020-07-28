const cheerio = require('cheerio')

const parseUdacityScrape = async (content) => {
    const $ = cheerio.load(content)
    try {

        return {
            providerCourseId: '',
            name: $('.card').find('h1').text(),
            slug: $('.card').find('p').text(),
            description: $('.course-summary').html(),
            price: 0,
            currency: 'dollar',
            provider: "5f1ee2d5c26f3837381c198a",
            language: 'English',
            subtitlesLaguages: '',
            lessons: $('.syllabus__list').find('div > a > div > h2').toArray().map(h => ({ name: $(h).text(), description: '' })),
            imageURL: $('.related-nd').css('background-image').split('"')[1] === "data:image/png" ? 'https://res.cloudinary.com/chikoom/image/upload/v1595860399/OnLife/Udacity_logo_small_bekehm.png': $('.related-nd').css('background-image').split('"')[1],
            courseURL: $('.breadcrumb').find('li > a').toArray().map(a => $(a).attr('href')).filter(a => a.includes('course/'))[0]
        }
    } catch(e) {
        return null
    }
}

const parseUdacitySingleCourseUrls = async ($) => {
    return await $('.card-wrapper')
        .find('div > ir-catalog-card > div > div > div > div > h3 > a')
        .toArray()
        .map(a => $(a).attr('href'))
        .slice(102, 113)
}

const udacityPageActionsFunction = async (page) => {
    const click1 = await page.$('.modal-close')
    await click1.click()
    await page.waitFor(1000)
    const click2 = await page.$('.dropdown-btn')
    await click2.click()
    await page.waitFor(3000)
    const click3 = await page.$('ul[_ngcontent-iridium-us-c25]')
    await click3.click()
    await page.waitFor(3000)
}

module.exports =
{
    udacityPageActionsFunction,
    parseUdacityScrape,
    parseUdacitySingleCourseUrls
}