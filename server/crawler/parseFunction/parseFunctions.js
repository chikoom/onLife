const cheerio = require('cheerio')

const parseUdemyScrape = async (content) => {
    const $ = cheerio.load(content)
    return {
        providerCourseId: await $('body').data().moduleArgs.course_id,
        name: await $('body').data().moduleArgs.title,
        slug: await $('.clp-lead__headline').text(),
        description: await cheerio.load($('.ud-component--course-landing-page-udlite--description').data().componentProps.description).text(),
        price: await $('.price-text--price-part--Tu6MH')[0].children[1].children[0].children[0].data.slice(1),
        currency: "shekel",
        provider: "5f1dacad08339e279014acb6",
        language: await $('.clp-lead__locale').text().trim(),
        subtitlesLaguages: await $('.caption--captions--1LuDm').text().replace(' ', '').split(',').reverse().slice(1),
        lessons: await $('.ud-component--course-landing-page-udlite--curriculum').data().componentProps.displayed_sections.map(l => l.items.map(a => ({ title: a.title, description: '' }))).flat(),
        imageURL: await $('.intro-asset--img-aspect--1UbeZ')[0].children[0].attribs.srcset.split(',')[1].replace('2x', '').trim(),
        courseURL: await $('body').data().moduleArgs.url
    }
}

module.exports = parseUdemyScrape