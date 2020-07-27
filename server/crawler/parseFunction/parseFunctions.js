const cheerio = require('cheerio')

const parseUdemyScrape = async (content) => {
    const $ = cheerio.load(content)
    return {
        providerCourseId: await $('body').data().moduleArgs.course_id,
        name: await $('body').data().moduleArgs.title,
        slug: await $('.clp-lead__headline').text(),
        description: await $('.ud-component--course-landing-page-udlite--description').data().componentProps.description,
        price: await $('.price-text--price-part--Tu6MH')[0].children[1].children[0].children[0].data.slice(1),
        currency: "shekel",
        provider: "5f1dacad08339e279014acb6",
        language: await $('.clp-lead__locale').text().trim(),
        subtitlesLaguages: await $('.caption--captions--1LuDm').text().replace(' ', '').split(',').reverse().slice(1),
        lessons: await $('.ud-component--course-landing-page-udlite--curriculum').data().componentProps.displayed_sections.map(l => l.items.map(a => ({ name: a.title, description: '' }))).flat(),
        imageURL: await $('.intro-asset--img-aspect--1UbeZ')[0].children[0].attribs.srcset.split(',')[1].replace('2x', '').trim(),
        courseURL: "https://www.udemy.com" + await $('body').data().moduleArgs.url
    }
}

const parseUdemySingleCourseUrls = async ($) => {
    return $('div[class="course-list--container--3zXPS"]')
        .find('div > div > a')
        .toArray()
        .map(a => $(a).attr('href'))
        .filter(a => a !== 'https://business.udemy.com/request-demo/?ref=right-rail&locale=en_US')
        .slice(0, 11)
}

module.exports =
{
    parseUdemyScrape,
    parseUdemySingleCourseUrls
}