const mongoose = require("mongoose");
const Course = require("./Course");
const Provider = require("./Provider");

let p1 = new Provider({
  name: "Udemy",
  homepageURL: "www.udemy.com",
  iconURL: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
});

let p2 = new Provider({
  name: "Udemier",
  homepageURL: "www.udemy.com",
  iconURL: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
});
console.log(p2);
p2.save()
// const testCourse = new Course({
//     providerCourseId: "String",
//     name: "String",
//     slug: "String",
//     description: "String",
//     price: 500,
//     currency: "String",
//     provider: testProvider,
//     language: "String",
//     subtitlesLanguages: ["String"],
//     lessons: [{name: "String", description: "String"}],
//     imageURL: "String",
//     videoURL: "String",
//     courseURL: "String"
// })

// const testUser = new User ({
//     userName: "ElonMusk",
//     password: "jedke4f",
//     courses: [{"course": testCourse, "progress": 0.7 }]
// })
// // testProvider.save()
// // testCourse.save()
// // testUser.save()

let course1 = {
  providerCourseId: "435345346",
  name: "Javascript for Dummies",
  slug: "The great course ever",
  description:
    "The great course ever The great course ever The great course ever The great course ever The great course ever The great course ever The great course ever",
  price: 500,
  currency: "USD",
  provider: p1,
  language: "EN-US",
  subtitlesLanguages: ["EN-US", "HE-IL"],
  lessons: [
    { name: "Lesson 1", description: "String String String" },
    { name: "Lesson 2", description: "String String String" },
  ],
  imageURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
  videoURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
  courseURL: "https://www.udemy.com/course/the-complete-javascript-course/",
};

//   let course2 =  {
//     providerCourseId: "435345346",
//     name: "Javascript for Experts",
//     slug: "The worst course ever",
//     description: "The worst course ever The worst course ever The worst course ever The worst course ever The worst course ever The worst course ever The worst course ever",
//     price: 200,
//     currency: "USD",
//     provider: {
//         name: "Udemy",
//         homepageURL: "www.udemy.com",
//         iconURL: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
//     },
//     language: "EN-US",
//     subtitlesLanguages: ["EN-US", "HE-IL"],
//     lessons: [{name: "Lesson 1", description: "String String String"}, {name: "Lesson 2", description: "String String String"}],
//     imageURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
//     videoURL: "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
//     courseURL: "https://www.udemy.com/course/the-complete-javascript-course/"
//   }

// let c1 = new Course(course1);
// //   let c2 = new Course(course2)

// c1.save();
// //   c2.save()


[
    {
        "_id": "5f1d5298de37ca320cc7d48a",
        "courses": [
            {
                "_id": "5f1d5298de37ca320cc7d48b",
                "course": {
                    "subtitlesLanguages": [
                        "EN-US",
                        "HE-IL"
                    ],
                    "_id": "5f1db17401d42339f86087f3",
                    "providerCourseId": "435345346",
                    "name": "Javascript for Dummies",
                    "slug": "The great course ever",
                    "description": "The great course ever The great course ever The great course ever The great course ever The great course ever The great course ever The great course ever",
                    "price": 500,
                    "currency": "USD",
                    "language": "EN-US",
                    "lessons": [
                        {
                            "_id": "5f1db17401d42339f86087f4",
                            "name": "Lesson 1",
                            "description": "String String String"
                        },
                        {
                            "_id": "5f1db17401d42339f86087f5",
                            "name": "Lesson 2",
                            "description": "String String String"
                        }
                    ],
                    "imageURL": "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
                    "videoURL": "https://img-a.udemycdn.com/course/480x270/851712_fc61_5.jpg",
                    "courseURL": "https://www.udemy.com/course/the-complete-javascript-course/",
                    "provider": "5f1dacad08339e279014acb6",
                    "__v": 0
                },
                "progress": 0.7
            }
        ]
    }
]




{
  "courses": [
      {
          "subtitlesLanguages": [],
          "_id": "5f1e9f243619a43aa0e918b3",
          "providerCourseId": "818990",
          "name": "Git a Web Developer Job: Mastering the Modern Workflow",
          "slug": "\nLearn Git, GitHub, Node.js, NPM, Object-oriented JavaScript, ES6, webpack, Netlify, BEM and Job Interview Tips\n",
          "description": "<p>This course was completely redesigned in <strong>November of 2019</strong> to match the demands and trends of the industry.</p><p>You already understand the basics of HTML and CSS, but you don’t necessarily feel qualified for the web developer jobs you want. In this course we’ll bridge that gap by building a mobile-first responsive&nbsp;website, together, step-by-step. Along the way we’ll learn the modern skill-set that companies are looking for in developers.</p><p>I know what companies are looking for because as a senior developer I’ve been on the hiring side of job interviews. Every time we passed on a candidate I’d think to myself <em>“It would be nice if we could point them towards a course that taught the exact skill set we’re looking for.”</em></p><p><strong>I couldn’t find a course like that - so I built this one.</strong></p><p>By the end of this course you’ll be able to build sites using the modern skills, tools, and best-practices that companies need in developers.</p><p>Take your developer career to the next level by:</p><ul><li><p>Learning <strong>Git, GitHub, and command-line basics</strong> to collaborate with other developers and deploy your sites live up onto the web.</p></li><li><p>Leveraging <strong>Node.js</strong> tools like <strong>NPM</strong> and <strong>webpack</strong> to save time by automating tasks.</p></li><li><p>Enhancing your <strong>CSS</strong> knowledge with techniques (<strong>BEM</strong> &amp; <strong>PostCSS</strong>) to keep your styles super-organized and manageable even on larger sites.</p></li><li><p>Speeding up your sites with the <strong>mobile-first performance</strong> philosophy.</p></li><li><p>Understanding <strong>JavaScript</strong> basics like <strong>Object-oriented Programming</strong>, and how to write well-structured code using the ES6 module pattern (<strong>Babel</strong> &amp; <strong>webpack</strong>).</p></li><li><p>Using the <strong>Netlify</strong> service to not only host your website but also learn the very basics of <strong>cloud (or AWS&nbsp;Lambda)&nbsp;functions</strong>.</p></li><li><p>Discovering tips to <strong>get more job interviews</strong>, do well in interviews, and continually progress in your career (avoid burnout &amp; stagnation).</p></li></ul><p><br>This course may be&nbsp;brand new, but this isn’t my first time teaching. I’ve led trainings for Fortune 500 companies, and I’ve already helped over 7,000 people on Udemy and&nbsp;received the following feedback:<br></p><p><em>\"Brad definitely has some of the best techniques to embed the lesson into your mind… hands down these are the best tutorials I have had the opportunity to view.\"</em><br></p><p><em>\"Presentation is concise without being tedious… you honestly feel that you have a thorough understanding of the subject.\"</em><br></p><p><em>\"…[Brad] explained the process. Not memorize this or that, he explained the process. If you're looking to take a course to understand the foundations of creating websites, look no further.\"</em><br></p><p><strong>I've been teaching for the better part of a decade and I&nbsp;consider this course my magnum opus.</strong> This is the course I&nbsp;wish I&nbsp;could have taken several years ago.</p><p>Become highly&nbsp;valuable and relevant&nbsp;to the&nbsp;companies that are&nbsp;hiring web&nbsp;developers;&nbsp;in one convenient place&nbsp;alongside one instructor. If you're ready to begin your transformation - I'll see you on the inside!</p>",
          "price": 53.9,
          "currency": "shekel",
          "provider": {
              "_id": "5f1dacad08339e279014acb6",
              "name": "Udemy",
              "homepageURL": "www.udemy.com",
              "iconURL": "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
              "__v": 0
          },
          "language": "English",
          "lessons": [
              {
                  "_id": "5f1e9f243619a43aa0e918b4",
                  "name": "Course Overview",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918b5",
                  "name": "What is Git?",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918b6",
                  "name": "See Git in Action",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918b7",
                  "name": "Important Note About Text Editing Software",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918b8",
                  "name": "Quick Note For Mac Users",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918b9",
                  "name": "Git Your Hands Dirty",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918ba",
                  "name": "Setup Your GitHub",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918bb",
                  "name": "The Need for Automation and Organization",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918bc",
                  "name": "A Quick Note",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918bd",
                  "name": "Node.js Introduction",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918be",
                  "name": "NPM Introduction",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918bf",
                  "name": "Important Note About Package Versions To Save You Frustration",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918c0",
                  "name": "Webpack Introduction",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918c1",
                  "name": "Setup Your Text Editor To Understand PostCSS Syntax",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918c2",
                  "name": "CSS With Webpack",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918c3",
                  "name": "Important Note",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918c4",
                  "name": "CSS File Architecture",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918c5",
                  "name": "What is BEM?",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918c6",
                  "name": "Complete Two Blocks",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918c7",
                  "name": "Webpack Dev Server",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918c8",
                  "name": "What does \"Mobile-first\" Mean?",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918c9",
                  "name": "Responsive Images",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918ca",
                  "name": "Tips for Testing Responsive Images",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918cb",
                  "name": "Creating Reusable Blocks",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918cc",
                  "name": "Headline Block",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918cd",
                  "name": "Column Layout Block",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918ce",
                  "name": "Attention to Detail (Part 1)",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918cf",
                  "name": "Attention to Detail (Part 2)",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918d0",
                  "name": "Git Branches",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918d1",
                  "name": "Styling Our Features (Part 1)",
                  "description": ""
              },
              {
                  "_id": "5f1e9f243619a43aa0e918d2",
                  "name": "Styling Our Features (Part 2)",
                  "description": ""
              }
          ],
          "imageURL": "https://img-a.udemycdn.com/course/480x270/818990_57c0_3.jpg",
          "courseURL": "/course/git-a-web-developer-job-mastering-the-modern-workflow/",
          "__v": 0
      },
      {
          "subtitlesLanguages": [],
          "_id": "5f1e9fd14ed573316483d230",
          "providerCourseId": "625204",
          "name": "The Web Developer Bootcamp",
          "slug": "\nThe only course you need to learn web development - HTML, CSS, JS, Node, and More!\n",
          "description": "<p><strong>Just updated to include Bootstrap 4.1.3!</strong></p><p>Hi! Welcome to the Web Developer Bootcamp, the <strong>only course you need to learn web development. </strong>There are a lot of options for online developer training, but this course is without a doubt the most comprehensive and effective on the market.  Here's why:</p><ul><li><p>This is the only online course taught by a professional bootcamp instructor.</p></li><li><p><strong>94% of my in-person bootcamp students go on to get full-time developer jobs</strong>. Most of them are complete beginners when I start working with them.</p></li><li><p>The previous 2 bootcamp programs that I taught cost <strong>$14,000 and $21,000</strong>.  This course is just as comprehensive but with brand new content for a fraction of the price.</p></li><li><p>Everything I cover is up-to-date and relevant to today's developer industry.<strong> No PHP or other dated technologies. This course does not cut any corners.</strong></p></li><li><p>This is the only complete beginner full-stack developer course that covers NodeJS.</p></li><li><p>We build 13+ projects, including a <strong>gigantic production application </strong>called YelpCamp. No other course walks you through the creation of such a substantial application.</p></li><li><p>The course is <strong>constantly updated</strong> with new content, projects, and modules.  Think of it as a subscription to a never-ending supply of developer training.</p></li><li><p>You get to meet my dog Rusty!</p></li></ul><p>When you're learning to program you often have to sacrifice learning the exciting and current technologies in favor of the \"beginner friendly\" classes.  With this course, you get the best of both worlds.  This is a course designed for the complete beginner, yet it covers some of the most exciting and relevant topics in the industry.</p><p>Throughout the course we cover tons of tools and technologies including:</p><ul><li><p><strong>HTML5</strong></p></li><li><p><strong>CSS3</strong></p></li><li><p><strong>JavaScript</strong></p></li><li><p><strong>Bootstrap 4</strong></p></li><li><p>SemanticUI</p></li><li><p>DOM Manipulation</p></li><li><p><strong>jQuery</strong></p></li><li><p>Unix(Command Line) Commands</p></li><li><p><strong>NodeJS</strong></p></li><li><p>NPM</p></li><li><p><strong>ExpressJS</strong></p></li><li><p>REST</p></li><li><p><strong>MongoDB</strong></p></li><li><p>Database Associations</p></li><li><p><strong>Authentication</strong></p></li><li><p>PassportJS</p></li><li><p>Authorization</p></li></ul><p>This course is also unique in the way that it is structured and presented. Many online courses are just a long series of \"watch as I code\" videos.  This course is different. I've incorporated everything I learned in my years of teaching to make this course not only more effective but more engaging. The course includes:<br></p><ul><li><p>Lectures</p></li><li><p>Code-Alongs</p></li><li><p>Projects</p></li><li><p>Exercises</p></li><li><p>Research Assignments</p></li><li><p>Slides</p></li><li><p>Downloads</p></li><li><p>Readings</p></li><li><p>Too many pictures of my dog Rusty</p></li></ul><p>If you have any questions, please don't hesitate to contact me.  I got into this industry because I love working with people and helping students learn.  Sign up today and see how fun, exciting, and rewarding web development can be!</p>",
          "price": 53.9,
          "currency": "shekel",
          "provider": {
              "_id": "5f1dacad08339e279014acb6",
              "name": "Udemy",
              "homepageURL": "www.udemy.com",
              "iconURL": "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
              "__v": 0
          },
          "language": "English",
          "lessons": [
              {
                  "_id": "5f1e9fd14ed573316483d231",
                  "name": "A Note On Asking For Help",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d232",
                  "name": "Additional FREE Content",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d233",
                  "name": "Introducing Our TA",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d234",
                  "name": "Join the Online Community",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d235",
                  "name": "Why This Course?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d236",
                  "name": "Syllabus Download",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d237",
                  "name": "Syllabus Walkthrough",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d238",
                  "name": "Lecture Slides",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d239",
                  "name": "Unit Objectives",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d23a",
                  "name": "Note about Setting Up Front-End Developer Environment",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d23b",
                  "name": "Setting Up Front-End Developer Environment",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d23c",
                  "name": "Note about Introduction to the Web",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d23d",
                  "name": "Introduction to the Web",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d23e",
                  "name": "The Front End Holy Trinity",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d23f",
                  "name": "Unit Objectives",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d240",
                  "name": "HTML Basics",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d241",
                  "name": "Note about Introduction to MDN",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d242",
                  "name": "Introduction to MDN",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d243",
                  "name": "HTML Boilerplate and Comments",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d244",
                  "name": "Basic Tags",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d245",
                  "name": "HTML Lists",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d246",
                  "name": "HTML Lists Assignment",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d247",
                  "name": "HTML Lists Assignment: SOLUTION",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d248",
                  "name": "Divs and Spans",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d249",
                  "name": "HTML Attributes",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d24a",
                  "name": "Recreate Webpage Assignment",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d24b",
                  "name": "Recreate Webpage Assignment: SOLUTION",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d24c",
                  "name": "Unit Objectives",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d24d",
                  "name": "HTML Tables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d24e",
                  "name": "Tables Pokemon Exercise",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d24f",
                  "name": "Tables Pokemon Exercise: SOLUTION",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d250",
                  "name": "Introduction to Forms",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d251",
                  "name": "Playing with Inputs",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d252",
                  "name": "The Form Tag",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d253",
                  "name": "Labels",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d254",
                  "name": "Form Validations",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d255",
                  "name": "Dropdowns and Radio Buttons",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d256",
                  "name": "Form Exercise",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d257",
                  "name": "Note about the Form Exercise solution",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d258",
                  "name": "Form Exercise: SOLUTION",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d259",
                  "name": "Unit Objectives",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d25a",
                  "name": "CSS Basics",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d25b",
                  "name": "Our First Stylesheet",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d25c",
                  "name": "Note about CSS Colors and Background and Border (next 2 lectures)",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d25d",
                  "name": "CSS Colors",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d25e",
                  "name": "Background and Border",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d25f",
                  "name": "Note about Selectors Basics Todo List",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d260",
                  "name": "Selectors Basics Todo List",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d261",
                  "name": "Introduction to Chrome Inspector",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d262",
                  "name": "More Advanced Selectors",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d263",
                  "name": "Note about Specificity and the Cascade",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d264",
                  "name": "Specificity and the Cascade",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d265",
                  "name": "Note about Selectors Practice Exercise",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d266",
                  "name": "Selectors Practice Exercise",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d267",
                  "name": "Selectors Practice Exercise: SOLUTION",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d268",
                  "name": "Unit Objectives",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d269",
                  "name": "Text and Fonts",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d26a",
                  "name": "More Text and Fonts",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d26b",
                  "name": "Note about Google Fonts",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d26c",
                  "name": "Using Google Fonts",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d26d",
                  "name": "Introduction to the Box Model",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d26e",
                  "name": "Creating a Tic Tac Toe Board",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d26f",
                  "name": "Creating a Tic Tac Toe Board: SOLUTION",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d270",
                  "name": "Note about Image Gallery Code Along Pt. 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d271",
                  "name": "Image Gallery Code Along Pt. 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d272",
                  "name": "Note about changes to Google Fonts",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d273",
                  "name": "Image Gallery Code Along Pt. 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d274",
                  "name": "CSS Blog From Scratch Exercise Intro",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d275",
                  "name": "CSS Blog From Scratch Exercise SOLUTION Pt. 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d276",
                  "name": "CSS Blog From Scratch Exercise SOLUTION Pt. 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d277",
                  "name": "CSS Blog From Scratch Exercise SOLUTION Pt. 3",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d278",
                  "name": "Unit Objectives",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d279",
                  "name": "Note about Bootstrap versions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d27a",
                  "name": "What is Bootstrap?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d27b",
                  "name": "Adding Bootstrap to a Project",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d27c",
                  "name": "Forms and Inputs",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d27d",
                  "name": "Nav Bars",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d27e",
                  "name": "Note about The Grid System",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d27f",
                  "name": "The Grid System",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d280",
                  "name": "Grid System Pt. 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d281",
                  "name": "Note about Bootstrap Image Gallery Pt. 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d282",
                  "name": "Bootstrap Image Gallery Pt. 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d283",
                  "name": "Notes about Font Awesome and jQuery",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d284",
                  "name": "Bootstrap Image Gallery Pt. 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d285",
                  "name": "Creating a Startup Landing Page Code Along",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d286",
                  "name": "Creating a Startup Landing Page Code Along Pt. 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d287",
                  "name": "Note about making bootstrap responsive on mobile devices",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d288",
                  "name": "A History of Bootstrap 4",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d289",
                  "name": "The Bootstrap 4 Documentation",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d28a",
                  "name": "Changes from Bootstrap 3 to 4",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d28b",
                  "name": "Bootstrap 4 Code/Solutions Download",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d28c",
                  "name": "Getting Started With Bootstrap 4",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d28d",
                  "name": "Bootstrap 4 Colors and Backgrounds",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d28e",
                  "name": "Typography",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d28f",
                  "name": "New Fancy Spacing Utilities",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d290",
                  "name": "Responsive Breakpoints",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d291",
                  "name": "Bootstrap4 Navbars",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d292",
                  "name": "The New Display Utility",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d293",
                  "name": "Bootstrap 4: Flexbox and Layout",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d294",
                  "name": "Flexbox Utilities Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d295",
                  "name": "Navs and Flexbox",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d296",
                  "name": "The Bootstrap 4 Grid",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d297",
                  "name": "PATTERN PROJECT Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d298",
                  "name": "PATTERN PROJECT Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d299",
                  "name": "The Grid + Flexbox",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d29a",
                  "name": "Museum of Candy Project Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d29b",
                  "name": "Note about Museum of Candy Project Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d29c",
                  "name": "Museum of Candy Project Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d29d",
                  "name": "Museum of Candy Project Part 3",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d29e",
                  "name": "Museum of Candy Project Part 4",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d29f",
                  "name": "Museum of Candy Project Part 5",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2a0",
                  "name": "Unit Objectives",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2a1",
                  "name": "The JavaScript Console",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2a2",
                  "name": "Primitives",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2a3",
                  "name": "Primitives Exercises",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2a4",
                  "name": "Variables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2a5",
                  "name": "Note about Variables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2a6",
                  "name": "Null and Undefined",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2a7",
                  "name": "Useful Built-In Methods",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2a8",
                  "name": "Writing JavaScript in a Separate File",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2a9",
                  "name": "JS Stalker Exercise",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2aa",
                  "name": "JS Stalker Exercise: SOLUTION",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2ab",
                  "name": "Age Calculator Exercise",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d2ac",
                  "name": "Age Calculator Exercise: SOLUTION",
                  "description": ""
              }
          ],
          "imageURL": "https://img-a.udemycdn.com/course/480x270/625204_436a_2.jpg",
          "courseURL": "/course/the-web-developer-bootcamp/",
          "__v": 0
      },
      {
          "subtitlesLanguages": [],
          "_id": "5f1e9fd14ed573316483d541",
          "providerCourseId": "437398",
          "name": "Build Responsive Real World Websites with HTML5 and CSS3",
          "slug": "\nThe easiest way to learn modern web design, HTML5 and CSS3 step-by-step from scratch. Design AND code a huge project.\n",
          "description": "<p><strong><em>***&nbsp;The #1 HTML5 and CSS3 course in the official Udemy rankings! ***</em></strong></p><p><em>\"Having gone through other related courses on other platforms, I can say this course is the most practical and readily applicable course on web design and development I have taken.\" —</em> Bernie Pacis</p><p><br></p><p>Are you looking for the best way to learn how to build&nbsp;beautiful websites with HTML5 and CSS3? That even&nbsp;look great on your phone?</p><p>Have you taken other HTML and CSS courses, but still wonder how to code a real-world website, not just some basic examples?</p><p>If your answer is a big YES...&nbsp;Then this is exactly the course you are looking for!</p><p><br></p><p><strong><em>So why is this course so unique and popular?</em></strong></p><p><strong>Reason #1:&nbsp;The&nbsp;course is completely project-based</strong></p><p>Together we&nbsp;hand-code&nbsp;a beautiful and responsive landing page for a fictional company that I made up just for the course. Step-by-step, you will learn more and more&nbsp;HTML5 and&nbsp;CSS3&nbsp;features, from beginner to advanced. These are the latest web technologies, used by every website in the world.&nbsp;And&nbsp;we even added some jQuery to the mix.</p><p>This huge project will teach you all the real-world&nbsp;skills to build real-world HTML5 and CSS3&nbsp;websites.&nbsp;This will allow you to build any website you can imagine...&nbsp;From complete scratch.</p><p><strong>Reason #2: You will not just learn how to code</strong></p><p>Coding is great, but it's not everything! That's why&nbsp;we will go through&nbsp;the entire process of building and launching our&nbsp;website project. This includes&nbsp;designing, coding, planning, writing clean and organized code, website optimization, best practices,&nbsp;and so much more.</p><p>Designing is really,&nbsp;<em>really</em>&nbsp;important.&nbsp;Have you seen all these beautiful and modern websites lately? Great!&nbsp;Because I will show you how it's done. And not just in theory, but also in practice. This is the only course on the market that focuses on both coding and designing, together.</p><p><strong>Reason #3: You walk away with a ready-to-launch website</strong></p><p>By&nbsp;the end of the course, you will have a complete, ready-to-launch website that looks great on any computer, tablet, and smartphone. Of course you get the entire code and all the images and graphical assets that I designed especially for the course&nbsp;as a free download.</p><p>Please check out the promo video to see the final website!</p><p><strong>Reason #4: I make HTML5&nbsp;and CSS3&nbsp;easy and fun</strong></p><p>With the right guidance, HTML5, CSS3, and responsive web design are really easy to learn and use in the real world.&nbsp;With a bunch of random tutorials and YouTube videos? Not so much. That's why I structured this training around a cool and complete&nbsp;project that's fun to code.</p><p><br></p><p><strong><em>Reviews: don't just take my word for it</em></strong></p><p><em>\"Most up-to-date design/developer course on Udemy!\" +++ \"Learnt more in my week of doing this course than in an entire year of studying\" +++&nbsp; \"I have been doing website development for more than twenty years and I still learned from this course\" +++ \"I'm sure that I will be able to build even very complex websites now\" +++ \"Very detailed - shows you the how and why it works\" +++ \"I have learned so freaking much! I love the emphasis he puts on design\" +++ \"Jonas your support and help is second to none\" +++ “The instructor is clear, knowledgeable, and very responsive to questions\" +++ \"Money well spent. The final project looks stunning and the resources Jonas gives are like gold\" +++ \"Newbie to Pro all in one course!\" +++ \"This has been the best course I have EVER purchased on Udemy\" +++ \"I had a great time learning\" +++ \"This course deserve 100 stars! Thank you Jonas!\"</em></p><p><br></p><p><strong><em>So here is exactly what we cover in this training:</em></strong></p><p>• Easy-to-follow and hands-on web development with HTML5, CSS3&nbsp;and some jQuery. </p><p>• The proven 7 real-world steps from complete scratch to a fully functional and optimized website.</p><p>• Simple-to-use web design guidelines and tips to make your website stand out from the crowd.</p><p>• How to get and use&nbsp;images, fonts and icons to make your website shine — all for free.</p><p>• Responsive web design: learn how to create websites that work beautifully on all screen sizes.</p><p>• How to use jQuery for super cool effects like animations, scroll effects and \"sticky\" navigation.</p><p>• How to optimize your website for good speed performance and for search engines (SEO).<br></p><p>• How to launch your website for the world to see it.</p><p><br></p><p><strong><em>Let's now find out if this course is for you. It's a perfect fit&nbsp;if...</em></strong></p><p><strong>Student #1:</strong>&nbsp;You are a complete beginner with no idea on how to build a website.</p><p><strong>Student #2:</strong> You already know some HTML&nbsp;and CSS&nbsp;from some tutorials or videos, but struggle to put together a good-looking, complete&nbsp;website.</p><p><strong>Student #3:</strong> You are a designer&nbsp;and want to expand your skills&nbsp;into HTML5&nbsp;and CSS3, because all your designer colleagues are learning how to code (they are smart).</p><p>Basically, if you are a master of HTML5 and&nbsp;CSS3, if you build the most beautiful websites in the world, then DON'T take the course. Everyone else: you should&nbsp;take the course,&nbsp;today.</p><p><br></p><p><strong><em>Now it's your turn to decide. This is what you get:</em></strong></p><p>• Lifetime access to my HD quality&nbsp;videos. No monthly subscription. Learn at your own pace, whenever you want.</p><p>•&nbsp;English&nbsp;captions for students with&nbsp;hearing impairment.</p><p>• All lectures are downloadable to make your learning experience even better.</p><p>• Downloadable code and design assets for the entire project. You can keep this code as a starting point for your own projects.</p><p>• Free helpful support in the course Q&amp;A when you have questions or get stuck.</p><p><br></p><p><strong>Sounds great? Then&nbsp;just&nbsp;click&nbsp;the “Take this course\" button, and let's start this fantastic journey together!</strong></p>",
          "price": 53.9,
          "currency": "shekel",
          "provider": {
              "_id": "5f1dacad08339e279014acb6",
              "name": "Udemy",
              "homepageURL": "www.udemy.com",
              "iconURL": "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
              "__v": 0
          },
          "language": "English",
          "lessons": [
              {
                  "_id": "5f1e9fd14ed573316483d542",
                  "name": "Let's Start This Amazing Journey!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d543",
                  "name": "READ BEFORE YOU START!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d544",
                  "name": "My Resources Page (Former E-Book)",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d545",
                  "name": "Download the Code",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d546",
                  "name": "Our main tool: Brackets text editor",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d547",
                  "name": "What is HTML?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d548",
                  "name": "The structure of an HTML document",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d549",
                  "name": "Starting to fill the structure",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d54a",
                  "name": "Images and attributes",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d54b",
                  "name": "One more thing: links",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d54c",
                  "name": "HTML Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d54d",
                  "name": "Getting started with CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d54e",
                  "name": "Starting to make our webpage pretty: text",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d54f",
                  "name": "Colors",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d550",
                  "name": "Classes and ID's",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d551",
                  "name": "The CSS box model",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d552",
                  "name": "Building a simple layout",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d553",
                  "name": "Polishing our blog post",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d554",
                  "name": "Relative vs. Absolute",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d555",
                  "name": "Getting started with the Chrome Developer Tools",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d556",
                  "name": "CSS Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d557",
                  "name": "Introduction to web design",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d558",
                  "name": "Beautiful typography",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d559",
                  "name": "Using colors like a pro",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d55a",
                  "name": "The meaning of colors in web design",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d55b",
                  "name": "Working with images",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d55c",
                  "name": "Working with icons",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d55d",
                  "name": "Spacing and layout",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d55e",
                  "name": "Introduction to user experience",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d55f",
                  "name": "Getting inspired: the secret ingredient for stunning web design",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d560",
                  "name": "Wrapping up what we've learned in this section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d561",
                  "name": "The ultimate cheatsheet: all web design guidelines in one place",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d562",
                  "name": "Web design quiz: test your knowledge!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d563",
                  "name": "Download the Code",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d564",
                  "name": "The 7 real-world steps to a fully functional website",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d565",
                  "name": "Download the 7 steps here",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d566",
                  "name": "Omnifood Project FAQs — READ BEFORE YOU START!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d567",
                  "name": "Starting to put the 7 steps into action",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d568",
                  "name": "First development steps",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d569",
                  "name": "Setting up the fluid grid for responsive web design",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d56a",
                  "name": "Building the header - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d56b",
                  "name": "Building the header - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d56c",
                  "name": "Building the header - Part 3",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d56d",
                  "name": "Building the features section - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d56e",
                  "name": "Building the features section - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d56f",
                  "name": "Building the favorite meals section - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d570",
                  "name": "Building the favorite meals section - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d571",
                  "name": "Building the how-it-works section - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d572",
                  "name": "Building the how-it-works section - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d573",
                  "name": "Building the cities section - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d574",
                  "name": "Building the cities section - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d575",
                  "name": "Building the customer testimonials section - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d576",
                  "name": "Building the customer testimonials section - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d577",
                  "name": "Building the sign-up section - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d578",
                  "name": "Building the sign-up section - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d579",
                  "name": "Building the contact form form - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d57a",
                  "name": "Building the contact form form - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d57b",
                  "name": "Building the footer - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d57c",
                  "name": "Building the footer - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d57d",
                  "name": "Making the webpage responsive - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d57e",
                  "name": "Making the webpage responsive - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d57f",
                  "name": "A note about web browsers",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d580",
                  "name": "Download the Code",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d581",
                  "name": "Introduction to jQuery",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d582",
                  "name": "Building a “sticky” navigation - Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d583",
                  "name": "Building a “sticky” navigation - Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d584",
                  "name": "Scrolling to elements",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d585",
                  "name": "Adding animations on scroll",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d586",
                  "name": "Making the navigation responsive",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d587",
                  "name": "Final touch: creating a favicon",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d588",
                  "name": "Performance optimization: site speed",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d589",
                  "name": "Basic search engine optimization (SEO)",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d58a",
                  "name": "Let’s launch our webpage!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d58b",
                  "name": "Google Analytics",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d58c",
                  "name": "You made it! Congratulations!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d58d",
                  "name": "My Special Gift for You: Never Stop Learning!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d58e",
                  "name": "What’s New in CSS: A Quick Intro to Flexbox, Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d58f",
                  "name": "What’s New in CSS: A Quick Intro to Flexbox, Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d590",
                  "name": "Using PHP to make our form work",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d591",
                  "name": "Super effective ways to improve your website’s conversion",
                  "description": ""
              }
          ],
          "imageURL": "https://img-a.udemycdn.com/course/480x270/437398_46c3_9.jpg",
          "courseURL": "/course/design-and-develop-a-killer-website-with-html5-and-css3/",
          "__v": 0
      },
      {
          "subtitlesLanguages": [],
          "_id": "5f1e9fd14ed573316483d32d",
          "providerCourseId": "1565838",
          "name": "The Complete 2020 Web Development Bootcamp",
          "slug": "\nBecome a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!\n",
          "description": "<p>Welcome to the Complete Web Development Bootcamp,<strong> the only course you need</strong> to learn to code and become a full-stack web developer. With over 12,000 ratings and a 4.8 average, my Web Development course is one of the HIGHEST&nbsp;RATED courses in the history of Udemy!&nbsp;⭐️⭐️⭐️⭐️⭐️&nbsp;</p><p>At 50+ hours, this Web Development course is without a doubt the <strong>most comprehensive </strong>web development course available online. Even if you have <strong>zero</strong> programming experience, this course will take you from <strong>beginner to mastery</strong>. Here's why:</p><ul><li><p>The course is a taught by the <strong>lead instructor</strong> at the App Brewery, London's <strong>leading in-person programming bootcamp</strong>.</p></li><li><p>The course has been updated to be <strong>2020 ready </strong>and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.</p></li><li><p>This course doesn't cut any corners, there are beautiful <strong>animated explanation videos</strong> and tens of <strong>real-world projects</strong> which you will get to build.</p></li><li><p>The curriculum was developed over a period of <strong>four years</strong>, with comprehensive student testing and feedback.</p></li><li><p>We've taught over 280,000 students how to code and many have gone on to <strong>change their lives </strong>by becoming professional developers or start their own tech startup.</p></li><li><p>You'll save yourself <strong>over $12,000 </strong>by enrolling, but still get access to the same teaching materials and learn from the same instructor and curriculum as our in-person programming bootcamp.</p></li><li><p>The course is <strong>constantly updated</strong> with new content, with new projects and modules determined by students - that's you!</p></li></ul><p><br></p><p>We'll take you <strong>step-by-step</strong> through engaging video tutorials and teach you everything you need to know to succeed as a web developer.</p><p>The course includes over <strong>50 hours</strong> of HD video tutorials and builds your programming knowledge while making real-world websites and web apps.</p><p><br></p><p>Throughout this comprehensive course, we cover a massive amount of tools and technologies, including:</p><ul><li><p>Front-End Web Development</p></li><li><p><strong>HTML</strong> 5</p></li><li><p><strong>CSS</strong> 3</p></li><li><p><strong>Bootstrap</strong> 4</p></li><li><p><strong>Javascript</strong> ES6</p></li><li><p>DOM Manipulation</p></li><li><p><strong>jQuery</strong></p></li><li><p>Bash Command Line</p></li><li><p>Git, <strong>GitHub</strong> and Version Control</p></li><li><p>Backend Web Development</p></li><li><p><strong>Node</strong>.js</p></li><li><p>NPM</p></li><li><p><strong>Express</strong>.js</p></li><li><p>EJS</p></li><li><p>REST</p></li><li><p><strong>APIs</strong></p></li><li><p>Databases</p></li><li><p>SQL</p></li><li><p><strong>MongoDB</strong></p></li><li><p>Mongoose</p></li><li><p>Authentication</p></li><li><p>Firebase</p></li><li><p><strong>React</strong>.js</p></li><li><p>React Hooks</p></li><li><p>Web Design</p></li><li><p>Deployment with GitHub Pages, Heroku and MongoDB&nbsp;Atlas</p></li></ul><p>By the end of this course, you will be <strong>fluently</strong> programming&nbsp;and be ready to <strong>make any website you can dream of.</strong></p><p>You'll also build a <strong>portfolio</strong> of over 25+ websites that you can show off to any potential employer.</p><p><strong>Sign up today, and look forward to:</strong></p><ul><li><p>Video Lectures</p></li><li><p>Code Challenges and Exercises</p></li><li><p>Fully Fledged Projects</p></li><li><p>Quizzes</p></li><li><p>Programming Resources and Cheatsheets</p></li><li><p>Downloads</p></li><li><p>Our best selling 12 Rules to Learn to Code eBook</p></li><li><p>$12,000+&nbsp;web development bootcamp&nbsp;course materials and curriculum</p></li></ul><p><br></p><p>Don't just take my word for it, check out what existing students have to say about the course:</p><p>\"Angela is just incredible, awesome and just fantastic in this course. I've never had such an instructor; <strong>detailed</strong> in every aspect of the course, gives precise explanations, gives you the anxiety to learn etc. She's got that ability to make fun while explaining thing for better understanding. I really love this course.\" - Ekeu MonkamUlrich</p><p>\"Angela is very thorough without ever being boring. I've taken MANY online courses in my life including my Bachelors and Masters degrees. She is by far the best instructor I've ever had. This course is <strong>packed with thousands of dollars worth of great instruction</strong>, and paced well enough for anyone to pick coding up and run with it- Thank you!\" - J Carlucci</p><p>\"Love the way Angela explains things. Easy to follow and full or logic. I can say she must spent a lot of energy creating this great course. Thank you and I recommend to all who's interested in coding!\" - Yiqing Zheng</p><p>\"So far (on my third day) this course has taught me <strong>more than I was able to learn in multiple other programming courses</strong>. This course is clearly outlined and builds upon itself gradually in an easy to understand way.\" - Normal Ramsey</p><p>\"This course will take you from beginner to intermediate level for real. If you don't know how to put together the pieces of web development this is what you're looking for. Angela explains in an amazing way by <strong>creating projects</strong> all the way during this course, explaining the concepts in real practice. Thank you very much, Angela. I will always consider you my mentor. Look forward to taking more courses with you.\" - Moises Dionisio Cruz</p><p>\"An amazing course, perfect for absolute beginners at the start of their coding journey! Angela is an amazing tutor and can explain in the most simple and comprehensible way even complex coding notions.<strong> Learning web development cannot get any more fun!</strong>\" - Zoe Moyssoglou</p><p>\"It's a different approach to teaching Web Development. I like that you are <strong>given everything possible to succeed</strong> from the onset.\" - Ronick Thomas</p><p>The tutor is simply AMAZING, by far the best tutor I have ever had. I would give her 10 stars out of 5. She is not just punching the code and talks to herself, but she is actually explaining things. She keeps on giving a really usefull hints and she will give you a great load of other references. I always knew what I was doing and why I was doing it. All the extra challenges have just made me to remember and understand things better. - Peter Dlugos</p><p><br></p><p><br></p><p><strong>REMEMBER… I'm so confident that you'll love this course that&nbsp;we're offering a FULL money back guarantee for&nbsp;30 days! So it's a complete no-brainer, sign up today with ZERO&nbsp;risk and EVERYTHING to gain.</strong></p><p>So what are you waiting for?&nbsp;Click the buy now button and join the world's highest rated web development course.</p>",
          "price": 55.9,
          "currency": "shekel",
          "provider": {
              "_id": "5f1dacad08339e279014acb6",
              "name": "Udemy",
              "homepageURL": "www.udemy.com",
              "iconURL": "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
              "__v": 0
          },
          "language": "English",
          "lessons": [
              {
                  "_id": "5f1e9fd14ed573316483d32e",
                  "name": "What You'll Get in This Course",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d32f",
                  "name": "Syllabus Download",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d330",
                  "name": "Bookmark the Course Resources",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d331",
                  "name": "How to Get the Most Out of the Course",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d332",
                  "name": "Download the 12 Rules to Learn to Code eBook",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d333",
                  "name": "How Does the Internet Actually Work?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d334",
                  "name": "How Do Websites Actually Work?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d335",
                  "name": "What You'll Need to Get Started - Setup Your Local Web Development Environment",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d336",
                  "name": "How to Get Help When You're Stuck",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d337",
                  "name": "Pathfinder",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d338",
                  "name": "Introduction to HTML",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d339",
                  "name": "The Anatomy of an HTML Tag",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d33a",
                  "name": "What we're building - HTML Personal Site",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d33b",
                  "name": "What is The HTML Boilerplate?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d33c",
                  "name": "How to Structure Text in HTML",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d33d",
                  "name": "HTML Lists",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d33e",
                  "name": "HTML Image Elements",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d33f",
                  "name": "HTML Links and Anchor Tags",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d340",
                  "name": "How to Ace this Course",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d341",
                  "name": "Feedback Time!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d342",
                  "name": "HTML Tables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d343",
                  "name": "Using HTML Tables for Layout",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d344",
                  "name": "HTML Tables Code Challenge",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d345",
                  "name": "How to Type Emojis",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d346",
                  "name": "HTML Tables Solution Walkthrough",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d347",
                  "name": "HTML Forms",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d348",
                  "name": "Forms in Practice - Create a Contact Me Form",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d349",
                  "name": "HTML Challenge",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d34a",
                  "name": "Publish Your Website!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d34b",
                  "name": "Tip from Angela - Habit Building with the Calendar Trick",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d34c",
                  "name": "Get Monthly Tips and Tools to  Level Up as a Developer",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d34d",
                  "name": "Feedback Time!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d34e",
                  "name": "Introduction to CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d34f",
                  "name": "Inline CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d350",
                  "name": "A Quick Note About the Next Lesson",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d351",
                  "name": "Internal CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d352",
                  "name": "External CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d353",
                  "name": "How to Debug CSS Code",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d354",
                  "name": "The Anatomy of CSS Syntax",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d355",
                  "name": "CSS Selectors",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d356",
                  "name": "Classes vs. Ids",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d357",
                  "name": "CSS Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d358",
                  "name": "Tip from Angela - Dealing with Distractions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d359",
                  "name": "Join the Student Community",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d35a",
                  "name": "Feedback Time!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d35b",
                  "name": "What We'll Make - Stylised Personal Site",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d35c",
                  "name": "What Are Favicons?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d35d",
                  "name": "HTML Divs",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d35e",
                  "name": "The Box Model of Website Styling",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d35f",
                  "name": "CSS Display Property",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d360",
                  "name": "Learn More About Web Design",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d361",
                  "name": "CSS Static and Relative Positioning",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d362",
                  "name": "Absolute positioning",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d363",
                  "name": "The Dark Art of Centering Elements with CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d364",
                  "name": "Font Styling in Our Personal Site",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d365",
                  "name": "Learn More About Typography",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d366",
                  "name": "Adding Content to Our Website",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d367",
                  "name": "CSS Sizing",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d368",
                  "name": "Font Properties Challenge 1 - Change the Font Colour",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d369",
                  "name": "Font Properties Challenge 2 - Change the Font Weight",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d36a",
                  "name": "Font Properties Challenge 3 - Change the Line Height",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d36b",
                  "name": "CSS Font Property Challenge Solutions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d36c",
                  "name": "CSS Float and Clear",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d36d",
                  "name": "CSS Challenge",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d36e",
                  "name": "Stylised Personal Site Solution Walkthrough",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d36f",
                  "name": "[Optional] Get More Practice HTML and CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d370",
                  "name": "Tip from Angela - Nothing Easy is Worth Doing!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d371",
                  "name": "Feedback Time!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d372",
                  "name": "What is Bootstrap?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d373",
                  "name": "Installing Bootstrap",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d374",
                  "name": "Web Design 101 - Wireframing",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d375",
                  "name": "The Bootstrap Navigation Bar",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d376",
                  "name": "What We'll Make: TinDog",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d377",
                  "name": "Download the Starting Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d378",
                  "name": "Setting Up Our New Project",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d379",
                  "name": "Bootstrap Grid Layout System",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d37a",
                  "name": "Getting Montserrat Black and other Font Weights",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d37b",
                  "name": "Adding Grid Layouts to Our Website",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d37c",
                  "name": "A Note About CSS Link Order",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d37d",
                  "name": "Bootstrap Containers",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d37e",
                  "name": "Bootstrap Buttons & Font Awesome",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d37f",
                  "name": "Styling Our Website Challenges and Solutions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d380",
                  "name": "Bootstrap Challenge 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d381",
                  "name": "Solution to Bootstrap Challenge 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d382",
                  "name": "Tip from Angela - How to Deal with Procrastination",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d383",
                  "name": "Feedback Time!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d384",
                  "name": "The Bootstrap Carousel Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d385",
                  "name": "The Bootstrap Carousel Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d386",
                  "name": "Bootstrap Cards",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d387",
                  "name": "The CSS Z-Index and Stacking Order",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d388",
                  "name": "Media Query Breakpoints",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d389",
                  "name": "Bootstrap Challenge 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d38a",
                  "name": "Bootstrap Challenge 2 Solution",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d38b",
                  "name": "How to become a Better Programmer - Code Refactoring",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d38c",
                  "name": "Put it into Practice - Refactor our Website Part 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d38d",
                  "name": "Advanced CSS - Combining Selectors",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d38e",
                  "name": "Refactoring our Website Part 2",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d38f",
                  "name": "Advanced CSS - Selector Priority",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d390",
                  "name": "Completing the Website",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d391",
                  "name": "Download the Completed Website",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d392",
                  "name": "Tip from Angela - Building a Programming Habit",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d393",
                  "name": "Feedback Time!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d394",
                  "name": "Introduction to Web Design",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d395",
                  "name": "Understanding Colour Theory",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d396",
                  "name": "Understanding Typography and How to Choose a Font",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d397",
                  "name": "Manage ATTENTION with effective User Interface (UI) Design",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d398",
                  "name": "User Experience (UX) Design",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d399",
                  "name": "Web Design in Practice - Let's apply what we've learnt!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d39a",
                  "name": "Introduction to Javascript",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d39b",
                  "name": "Javascript Alerts - Adding Behaviour to Websites",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d39c",
                  "name": "Data Types",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d39d",
                  "name": "Javascript Variables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d39e",
                  "name": "Javascript Variables Exercise Start",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d39f",
                  "name": "Javascript Variables Exercise",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3a0",
                  "name": "Javascript Variables Exercise Solution",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3a1",
                  "name": "Naming and Naming Conventions for Javascript Variables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3a2",
                  "name": "Javascript Variable Naming Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3a3",
                  "name": "String Concatenation",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3a4",
                  "name": "String Lengths and Retrieving the Number of Characters",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3a5",
                  "name": "Slicing and Extracting Parts of a String",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3a6",
                  "name": "Challenge: Changing Casing in Text",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3a7",
                  "name": "Challenge: Changing String Casing Solution",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3a8",
                  "name": "Basic Arithmetic and the Modulo Operator in Javascript",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3a9",
                  "name": "Increment and Decrement Expressions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3aa",
                  "name": "Javascript Numbers Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ab",
                  "name": "Functions Part 1: Creating and Calling Functions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ac",
                  "name": "Functions Part 1 Challenge - The Karel Robot",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ad",
                  "name": "The Karel Chess Board Solution",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ae",
                  "name": "A Quick Note About the Next Lesson",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3af",
                  "name": "Functions Part 2: Parameters and Arguments",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3b0",
                  "name": "Life in Weeks Coding Exercise",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3b1",
                  "name": "Life in Weeks Solution",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3b2",
                  "name": "Functions Part 3: Outputs & Return Values",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3b3",
                  "name": "Challenge: Create a BMI Calculator",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3b4",
                  "name": "BMI Calculator Challenge",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3b5",
                  "name": "Challenge: BMI Calculator Solution",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3b6",
                  "name": "JavaScript Functions Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3b7",
                  "name": "Tip from Angela - Set Your Expectations",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3b8",
                  "name": "Feedback Time!",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3b9",
                  "name": "Random Number Generation in Javascript: Building a Love Calculator",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ba",
                  "name": "Control Statements: Using If-Else Conditionals & Logic",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3bb",
                  "name": "Comparators and Equality",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3bc",
                  "name": "Combining Comparators",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3bd",
                  "name": "BMI Calculator Advanced (IF/ELSE)",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3be",
                  "name": "Introducing the Leap Year Code Challenge",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3bf",
                  "name": "Leap Year Challenge Exercise",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3c0",
                  "name": "Leap Year Solution",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3c1",
                  "name": "Collections: Working with Javascript Arrays",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3c2",
                  "name": "Adding Elements and Intermediate Array Techniques",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3c3",
                  "name": "Who's Buying Lunch? Code Challenge",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3c4",
                  "name": "Who's Buying Lunch Solution",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3c5",
                  "name": "Control Statements: While Loops",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3c6",
                  "name": "Solution to the 99 Bottles Challenge",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3c7",
                  "name": "Control Statements: For Loops",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3c8",
                  "name": "Introducing the Fibonacci Code Challenge",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3c9",
                  "name": "The Fibonacci Exercise",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ca",
                  "name": "Fibonacci Solution",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3cb",
                  "name": "Tip from Angela - Retrieval is How You Learn",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3cc",
                  "name": "Feedback Time!",
                  "description": ""
              }
          ],
          "imageURL": "https://img-a.udemycdn.com/course/480x270/1565838_e54e_11.jpg",
          "courseURL": "/course/the-complete-web-development-bootcamp/",
          "__v": 0
      },
      {
          "subtitlesLanguages": [],
          "_id": "5f1e9fd14ed573316483d3cd",
          "providerCourseId": "764164",
          "name": "The Complete Web Developer Course 2.0",
          "slug": "\nLearn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!\n",
          "description": "<p>You’re here because you’re ready to start building professional, career-boosting websites.</p><p>Or maybe you’re coding already and want to take things to the next level?&nbsp; </p><p>I’m here because I’m the creator of the <em>best-selling, highest-rated</em> coding courses on Udemy—and I love to share my secrets with you.</p><p><strong>Welcome to The Complete Web Developer Course 2.0</strong></p><p>Based on feedback from over 25,000 5-star reviews, I’ve created <strong>The Complete Web Developer Course 2.0, </strong>the sequel to my global smash-hit: Build 14 Websites course. </p><p><em>It’s my most current, in-depth and exciting coding course—to date.</em></p><p>Designed for you—no matter where you are in your coding journey—my next-generation web developer course is overflowing with fresh content. Jam-packed with high-quality tutorials.&nbsp; And crucially, features the most advanced, hot-off-the-press software versions.</p><p><em>It’s your fast-track to iron-clad coding results.</em></p><p><strong>We’ve left no stone unturned. </strong></p><p>I guarantee, this is THE most thorough, laser-focused and up-to-date coding course available ANYWHERE on the market—or your money back.</p><p>Whether you’re an entrepreneur, an innovator or the next Mark Zuckerberg just waiting to happen, here you’ll find everything you need to get up and coding—fast. </p><p>And it’s all in one perfectly-packaged, super-convenient online solution.</p><p><em>“It is hard to find a complete course out there that is like this one. I am amazed at the value of the content and I would without a doubt recommend it to anyone looking for a complete web developing course.”</em> -Daniel Lim</p><p><strong>From zero to break-neck speed in just six weeks.</strong></p><p>What else makes my course different?&nbsp; It’ll take you from beginner to expert in just six weeks (or take it at your own pace—whatever suits you).</p><p><em>“I went from total novice to getting my first paid client, before I’d even finished the course. Almost unbelievable!” </em>Priti Palmer.</p><p><strong>Don’t be the one to get left behind</strong></p><p>Get started today and join millions of my happy students, many of whom have changed careers, created second incomes or added critical new skills to their tool kits. </p><p>Oh, and did I mention you get FREE unlimited hosting for one year?&nbsp; </p><p>Sign up to <strong>The Complete Web Developers Course 2.0</strong> today and revolutionise your learning. Effortlessly embed the fundamentals. Refresh your groundwork. Dig deeper than ever. Start building powerful apps and cash-earning websites today—and enjoy bigger, brighter opportunities.</p><p><em>“Excellent course gives you everything you need to know for doing awesome websites!”</em> - Steven De Jesús</p><p><strong>Don’t believe me? I offer full money back guarantee if you haven’t earned your money back within 60 days of completing the course.</strong></p><p>Ready to open new doors and become a smart, in-demand web developer?&nbsp; </p><p>Here’s what you get with <strong>The Complete Web Developer Course 2.0</strong></p><p>You’ll get access to twelve chapters that dig deep into the nitty gritty of building successful websites.</p><p>Each chapter is supported with over 40 hours of clear, intelligent video tutorials and practical website challenges. </p><p><strong>All at your fingers tips. Right now.</strong></p><ul><li><p>The course starts with the fundamentals. I’ll show you insider tips to work quickly and efficiently with web technologies like HTML5, CSS3 and Python.&nbsp; </p></li><li><p>Once you’ve got that locked down, I’ll show you how to build your own responsive websites using more advanced techniques such as jQuery PHP 7, MySQL 5 and Twitter Bootstrap. </p></li><li><p>By then you’ll be developing blogs and eCommerce sites with Wordpress, and learn smart ways to add dynamic content, using APls to connect to sites such as Google Maps and Facebook.</p></li><li><p>As we all know, the best way to learn is to do, so you’ll complete fun website challenges at every turn. Plus, as you fly through the course, you’ll use your skills to put a site together as you go. The final challenge is a full Twitter clone. </p></li></ul><p><em>“Very easy to follow along with how the course has been divided into small topics. The summary pages at the end of each topic are very useful to review if you have to take a break from the course, allowing you to pick up right where you left off.”</em> - Andrea Price-Lace</p><p>Over 12 chapters you will learn:</p><ul><li><p><strong>How does the web work?</strong></p></li><li><p><strong>Setting up your (free) hosting</strong></p></li><li><p><strong>HTML</strong></p></li><li><p><strong>CSS</strong></p></li><li><p><strong>Javascript</strong></p></li><li><p><strong>jQuery</strong></p></li><li><p><strong>CMSs and WordPress</strong></p></li><li><p><strong>Responsive Design</strong></p></li><li><p><strong>PHP Coding</strong></p></li><li><p><strong>MySQL Databases</strong></p></li><li><p><strong>Putting it all together: Making a Twitter clone</strong></p></li><li><p><strong><em>Bonus Chapter: How to make $10,000 while learning to code</em></strong></p></li></ul><p>What else will you get?</p><ul><li><p><strong>A friendly,&nbsp; informal community to support you every step of the way</strong></p></li><li><p><strong>Personal contact with me, the course tutor</strong></p></li><li><p><strong>Ebooks that will show you how to start earning before you’ve even finished</strong></p></li><li><p><strong>Lifetime access to course materials</strong></p></li><li><p><strong>Hands-on learning to lock that knowledge in</strong></p></li><li><p><strong>A deep understanding of how to code, design and build powerful websites</strong></p></li><li><p><strong>FREE UNLIMITED WEB HOSTING FOR ONE YEAR (worth $199)&nbsp;</strong>*Limited to one year per student not per course*</p></li></ul><p><em>“There are TONS of books, expensive courses, and crappy videos online that you could waste hours upon hours on. DON’T. Just take this course. You’ll see.” T. Henderson</em></p><p>Never waste another minute learning from out-of-date books, clunky and expensive online courses and yawnsome YouTube videos again! </p><p>With <strong>The</strong> <strong>Complete Web Developer Course 2.0</strong> everything’s ready to go, in one convenient, mapped-out platform.&nbsp; </p><p>Plus you’ll get fast, friendly, responsive support by email, Twitter and on the Udemy forums.&nbsp; Or enjoy chatting with 100,000 other students in my friendly forums.</p><p><em>“Great course!!! Easy to follow and gives great support if needed! Both the instructor and fellow students are quick at helping out.” - </em>Malin Singleton</p><p><strong>Take a peek at my bio below, to see how I gave up my successful career to teach others to code part time.&nbsp; Since making that decision, my life has changed beyond compare. </strong></p><p><strong>I guarantee that ANYONE can benefit from taking this course, whether it’s earning some extra money or changing your career altogether.</strong></p><p><strong>So what <em>are you waiting for? Transform your world and sign up now to get a free copy of my exclusive 20 page ebook ‘How to make $10,000 while learning to code’.</em></strong></p><p><em>“I learned more in the first few HTML tutorials then I did with 70% of code academy.” - Louis Elliott</em></p><p><strong>Taught by</strong></p><p>Hi! I’m Rob. I have a degree in Mathematics from Cambridge University and you might call me a bit of coding geek.&nbsp; </p><p>After building websites for friends and family for fun, I soon learned that web development was a very lucrative career choice. I gave up my successful (and sometimes stressful) job as a teacher to work part time and today, couldn’t be happier. </p><p>I’m passionate about teaching kids to code, so every summer I run codeschoolorguk in the beautiful city of Cambridge. I also run the popular web hosting and design service, Eco Web Hosting, which leaves me free to share my secrets with people like you.</p><p>You wouldn’t believe the freedom that being a web developer offers. Sign up and find out for yourself why so many people are taking and recommending this course.&nbsp; I genuinely believe it’s the best on the market and if you don’t agree, I’ll happily refund your money.</p><p><em>“If you’re looking for a genuinely effective course that gears you up to competently build polished, professional websites that people will want to pay you for, I personally guarantee this is the ONLY course for you.” Rob Percival</em></p><p>Sign up to <strong>The Complete Web Developer Course 2.0</strong> and join me in this amazing adventure today.</p><p><em> “The course is excellent. I haven't completed even half the course but couldn't wait to share my review based on the experience so far. This is just the perfect recipe for students who have little or no knowledge of the technologies required to develop websites. (It also helps the students who know them). The one thing that impressed me a lot was the motto - Learn by Doing. I personally knew these technologies as I had studied them in college but I really learned them while doing this course!! And there's the difference. The practical hands on knowledge is really helpful. Kudos! Keep up the good work :).”</em> -Veeresh Kamble</p><p><br></p>",
          "price": 53.9,
          "currency": "shekel",
          "provider": {
              "_id": "5f1dacad08339e279014acb6",
              "name": "Udemy",
              "homepageURL": "www.udemy.com",
              "iconURL": "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
              "__v": 0
          },
          "language": "English",
          "lessons": [
              {
                  "_id": "5f1e9fd14ed573316483d3ce",
                  "name": "Introduction To Getting Started Section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3cf",
                  "name": "How to Get All the Free Stuff",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3d0",
                  "name": "Getting Started On A Mac",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3d1",
                  "name": "Getting Started On Windows",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3d2",
                  "name": "How To Ask Great Questions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3d3",
                  "name": "Frequently Asked Questions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3d4",
                  "name": "Introduction To HTML 5 Section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3d5",
                  "name": "Your First Webpage",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3d6",
                  "name": "Your First Webpage - Files & Coding Challenge",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3d7",
                  "name": "The Structure Of A Webpage",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3d8",
                  "name": "The Structure Of A Webpage - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3d9",
                  "name": "Creating A Full Webpage",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3da",
                  "name": "Creating A Full Webpage - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3db",
                  "name": "Header Tags",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3dc",
                  "name": "Header Tags - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3dd",
                  "name": "Paragraph Tags",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3de",
                  "name": "Paragraph Tags - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3df",
                  "name": "Formatting Text",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3e0",
                  "name": "Formatting Text - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3e1",
                  "name": "Unordered Lists",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3e2",
                  "name": "Unordered Lists - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3e3",
                  "name": "Ordered Lists",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3e4",
                  "name": "Ordered Lists - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3e5",
                  "name": "Images",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3e6",
                  "name": "Images - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3e7",
                  "name": "Forms",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3e8",
                  "name": "Forms - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3e9",
                  "name": "Tables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ea",
                  "name": "Tables - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3eb",
                  "name": "Links",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ec",
                  "name": "Links - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ed",
                  "name": "HTML Entities",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ee",
                  "name": "HTML Entities - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ef",
                  "name": "IFrames",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3f0",
                  "name": "IFrames - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3f1",
                  "name": "Putting It All Together",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3f2",
                  "name": "Putting It All Together - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3f3",
                  "name": "Setting Up Your Free Hosting",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3f4",
                  "name": "Setting Up FTP",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3f5",
                  "name": "Note On Firefox Versions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3f6",
                  "name": "Setting Up FireFTP On Windows - Legacy",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3f7",
                  "name": "Setting Up FireFTP On Mac - Legacy",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3f8",
                  "name": "Further Reading - HTML",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3f9",
                  "name": "Reference 1 - HTML Tag Reference",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3fa",
                  "name": "HTML Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3fb",
                  "name": "CCA HTML Level 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3fc",
                  "name": "Introduction To CSS 3 Section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3fd",
                  "name": "What Is CSS?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3fe",
                  "name": "Inline CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d3ff",
                  "name": "Inline CSS - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d400",
                  "name": "Internal CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d401",
                  "name": "Internal CSS - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d402",
                  "name": "Classes And IDs",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d403",
                  "name": "Classes And IDs - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d404",
                  "name": "Divs",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d405",
                  "name": "Divs - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d406",
                  "name": "Colors",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d407",
                  "name": "Colors - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d408",
                  "name": "Floating",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d409",
                  "name": "Floating - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d40a",
                  "name": "Positioning",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d40b",
                  "name": "Positioning - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d40c",
                  "name": "Margins",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d40d",
                  "name": "Margins - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d40e",
                  "name": "Padding",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d40f",
                  "name": "Padding - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d410",
                  "name": "Borders",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d411",
                  "name": "Borders - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d412",
                  "name": "Fonts",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d413",
                  "name": "Fonts - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d414",
                  "name": "Styling Text",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d415",
                  "name": "Styling Text - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d416",
                  "name": "Aligning Text",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d417",
                  "name": "Aligning Text - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d418",
                  "name": "Styling Links",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d419",
                  "name": "Styling Links - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d41a",
                  "name": "CSS Project BBC News Website (1)",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d41b",
                  "name": "CSS Project BBC News Website (2)",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d41c",
                  "name": "CSS Project BBC News Website (3)",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d41d",
                  "name": "CSS Project BBC News Website (4)",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d41e",
                  "name": "CSS Project BBC News Website - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d41f",
                  "name": "External CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d420",
                  "name": "Further Reading - CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d421",
                  "name": "Reference 2 - CSS",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d422",
                  "name": "CSS - Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d423",
                  "name": "CCA CSS Level 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d424",
                  "name": "Introduction To Javascript Section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d425",
                  "name": "What Is Javascript?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d426",
                  "name": "What Is Javascript? - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d427",
                  "name": "Internal Javascript",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d428",
                  "name": "Internal Javascript - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d429",
                  "name": "Accessing Elements",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d42a",
                  "name": "Accessing Elements - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d42b",
                  "name": "Responding To A Click",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d42c",
                  "name": "Responding To A Click - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d42d",
                  "name": "Changing Website Content",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d42e",
                  "name": "Changing Website Content - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d42f",
                  "name": "Manipulating Styles With Javascript",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d430",
                  "name": "Manipulating Styles With Javascript - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d431",
                  "name": "Mini Challenge - Disappearing Circles",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d432",
                  "name": "Mini Challenge - Disappearing Circles - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d433",
                  "name": "Variables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d434",
                  "name": "Variables - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d435",
                  "name": "Arrays",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d436",
                  "name": "Arrays - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d437",
                  "name": "If Statements",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d438",
                  "name": "If Statements - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d439",
                  "name": "Javascript Game - How Many Fingers",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d43a",
                  "name": "Javascript Game - How Many Fingers - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d43b",
                  "name": "Loops",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d43c",
                  "name": "Loops - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d43d",
                  "name": "While Loops",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d43e",
                  "name": "While Loops - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d43f",
                  "name": "Functions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d440",
                  "name": "Functions - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d441",
                  "name": "Javascript Project - Reaction Tester",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d442",
                  "name": "Javascript Project - Reaction Tester - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d443",
                  "name": "External Javascript",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d444",
                  "name": "External Javascript - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d445",
                  "name": "Further Reading - Javascript",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d446",
                  "name": "Reference 3 - Javascript",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d447",
                  "name": "Javascript - Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d448",
                  "name": "CCA Javascript Level 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d449",
                  "name": "Introduction To jQuery Section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d44a",
                  "name": "What Is jQuery?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d44b",
                  "name": "Using jQuery In Your Webpages",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d44c",
                  "name": "Using jQuery In Your Webpages - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d44d",
                  "name": "Detecting A Click",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d44e",
                  "name": "Detecting A Click - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d44f",
                  "name": "Changing Website Content",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d450",
                  "name": "Changing Website Content - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d451",
                  "name": "Changing Website Styles",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d452",
                  "name": "Changing Website Styles - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d453",
                  "name": "Fading Content",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d454",
                  "name": "Fading Content - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d455",
                  "name": "Animating Content",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d456",
                  "name": "Animating Content - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d457",
                  "name": "AJAX",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d458",
                  "name": "AJAX - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d459",
                  "name": "Regular Expressions",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d45a",
                  "name": "Regular Expressions - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d45b",
                  "name": "Mini Project - Form Validation",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d45c",
                  "name": "Mini Project - Form Validation - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d45d",
                  "name": "Introducing jQuery UI",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d45e",
                  "name": "Introducing jQuery UI - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d45f",
                  "name": "Draggables & Resizables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d460",
                  "name": "Draggables & Resizables - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d461",
                  "name": "Droppables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d462",
                  "name": "Droppables - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d463",
                  "name": "Accordion & Sortables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d464",
                  "name": "Accordion & Sortables - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d465",
                  "name": "jQuery Project - Code Player",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d466",
                  "name": "jQuery Project - Code Player Project - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d467",
                  "name": "Further Reading - jQuery",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d468",
                  "name": "JQuery - Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d469",
                  "name": "CCA jQuery Level 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d46a",
                  "name": "Introduction To Bootstrap 4 Section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d46b",
                  "name": "What Is Bootstrap?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d46c",
                  "name": "Your First Bootstrap Site",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d46d",
                  "name": "Your First Bootstrap Site - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d46e",
                  "name": "The Grid System",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d46f",
                  "name": "The Grid System - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d470",
                  "name": "Introducing Navbars",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d471",
                  "name": "Introducing Navbars - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d472",
                  "name": "Forms & Tables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d473",
                  "name": "Forms & Tables - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d474",
                  "name": "Bootstrap Components",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d475",
                  "name": "Bootstrap Components - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d476",
                  "name": "Modals, Popovers & Tooltips",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d477",
                  "name": "Modals, Popovers & Tooltips - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d478",
                  "name": "ScrollSpy",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d479",
                  "name": "ScrollSpy - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d47a",
                  "name": "Project - App Landing Page",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d47b",
                  "name": "Project - App Landing Page - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d47c",
                  "name": "The Free Bootstrap Themes",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d47d",
                  "name": "Further Reading - Bootstrap",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d47e",
                  "name": "Bootstrap - Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d47f",
                  "name": "Introduction To Wordpress Section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d480",
                  "name": "What Is Wordpress?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d481",
                  "name": "The Wordpress Dashboard",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d482",
                  "name": "6.3 Wordpress Themes",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d483",
                  "name": "Important: A note about X Theme and the next lecture",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d484",
                  "name": "How To Get $10 Off X Theme",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d485",
                  "name": "6.4 Creating A Blog",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d486",
                  "name": "Creating An Ecommerce Site",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d487",
                  "name": "Wordpress Challenge - Create A Site",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d488",
                  "name": "Further Reading - Wordpress",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d489",
                  "name": "Wordpress - Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d48a",
                  "name": "Introduction To PHP Section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d48b",
                  "name": "Introduction To PHP",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d48c",
                  "name": "Hello World With PHP",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d48d",
                  "name": "Hello World With PHP - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d48e",
                  "name": "Variables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d48f",
                  "name": "Variables - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d490",
                  "name": "Arrays",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d491",
                  "name": "Arrays - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d492",
                  "name": "If Statements",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d493",
                  "name": "If Statements - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d494",
                  "name": "For And For Each Loops",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d495",
                  "name": "For And For Each Loops - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d496",
                  "name": "While Loops",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d497",
                  "name": "While Loops - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d498",
                  "name": "GET Variables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d499",
                  "name": "GET Variables - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d49a",
                  "name": "POST Variables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d49b",
                  "name": "POST Variables - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d49c",
                  "name": "Sending An Email With PHP",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d49d",
                  "name": "Sending An Email With PHP - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d49e",
                  "name": "Mini Project - A Contact Form",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d49f",
                  "name": "Mini Project - A Contact Form - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4a0",
                  "name": "Getting Contents Of Other Scripts",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4a1",
                  "name": "Getting Contents Of Other Scripts - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4a2",
                  "name": "Project - Weather Scraper",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4a3",
                  "name": "Project - Weather Scraper - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4a4",
                  "name": "Further Reading - PHP",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4a5",
                  "name": "PHP - Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4a6",
                  "name": "CCA PHP Level 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4a7",
                  "name": "Introduction To MySQL 5 Section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4a8",
                  "name": "Introduction To MySQL",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4a9",
                  "name": "Connecting To A Database",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4aa",
                  "name": "Connecting To A Database - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4ab",
                  "name": "Retrieving Data From A Database",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4ac",
                  "name": "Retrieving Data From A Database - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4ad",
                  "name": "Inserting And Updating Data",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4ae",
                  "name": "Inserting And Updating Data - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4af",
                  "name": "Looping Through Data",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4b0",
                  "name": "Looping Through Data - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4b1",
                  "name": "Session Variables",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4b2",
                  "name": "Session Variables - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4b3",
                  "name": "Cookies",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4b4",
                  "name": "Cookies - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4b5",
                  "name": "Storing Passwords Securely",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4b6",
                  "name": "Storing Passwords Securely - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4b7",
                  "name": "A note about secure passwords - password_hash()",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4b8",
                  "name": "Project Secret Diary (1)",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4b9",
                  "name": "Project Secret Diary - Part 1 Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4ba",
                  "name": "Project - Secret Diary (2)",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4bb",
                  "name": "Project Secret Diary - Part 2 Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4bc",
                  "name": "Further Reading - MySQL",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4bd",
                  "name": "MySQL - Quiz",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4be",
                  "name": "CCA MySQL Level 1",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4bf",
                  "name": "Introduction To APIs Section",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4c0",
                  "name": "What Is An API?",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4c1",
                  "name": "What's The Weather",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4c2",
                  "name": "What's The Weather - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4c3",
                  "name": "The Google Maps API",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4c4",
                  "name": "The Google Maps API - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4c5",
                  "name": "Geocoding With Google Maps",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4c6",
                  "name": "Geocoding With Google Maps - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4c7",
                  "name": "Mini Challenge - Postcode Finder",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4c8",
                  "name": "Mini Challenge Postcode Finder - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4c9",
                  "name": "The Twitter API - UPDATE",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4ca",
                  "name": "The Twitter API",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4cb",
                  "name": "The Twitter API - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4cc",
                  "name": "Challenge - Build A Twitter Client",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4cd",
                  "name": "Build A Twitter Client - Files",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4ce",
                  "name": "Further Reading - APIs",
                  "description": ""
              },
              {
                  "_id": "5f1e9fd14ed573316483d4cf",
                  "name": "APIs - Quiz",
                  "description": ""
              }
          ],
          "imageURL": "https://img-a.udemycdn.com/course/480x270/764164_de03_2.jpg",
          "courseURL": "/course/the-complete-web-developer-course-2/",
          "__v": 0
      },
      {
          "subtitlesLanguages": [],
          "_id": "5f1ea0a24896412bd80834f0",
          "providerCourseId": "246154",
          "name": "Web Design for Beginners: Real World Coding in HTML & CSS",
          "slug": "\nLaunch a career as a web designer by learning HTML5, CSS3, responsive design, Sass and more!\n",
          "description": "<p>You can launch a new career in web development today by learning HTML &amp; CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust. I've taught HTML and CSS to countless coworkers and held training sessions for fortune 100 companies. <strong>I am that teacher you can trust</strong>.&nbsp; </p><p>Don't limit yourself by creating websites with some cheesy “site-builder\" tool. This course teaches you how to take 100% control over your webpages by using the same concepts that every professional website is created with.</p><p>This course does not assume any prior experience. We start at square one and learn together bit by bit. By the end of the course you will have created (by hand) a website that looks great on phones, tablets, laptops, and desktops alike.</p><p>In the summer of 2020 the course has received a new section where we push our website live up onto the web using the free GitHub Pages service; this means you'll be able to share a link to what you've created with your friends, family, colleagues and the world!</p><p><strong><em>I have helped over 100,000 students and have received the following feedback:&nbsp; </em></strong>&nbsp; </p><p>“…A fantastic course… clear, definite and engaging.\"</p><p>“…Presentation is concise without being tedious… you honestly feel that you have a thorough understanding of the subject.\"</p><p>“…[Brad] explained the process. Not memorize this or that, he explained the process. If you're looking to take a course to understand the foundations of creating websites, look no further.\"</p><p>“Brad definitely has some of the best techniques to embed the lesson into your mind… hands down these are the best tutorials I have had the opportunity to view.\"</p><p>“I found this course really helpful and I highly recommend it… all things you learn are seen in action instantly.\"</p><p>“Brad has put together a great foundation for any body wishing to get a good understanding with front end web-development.\"</p><p>“…I would definitely recommend this course to most folks I know who want to learn web design.\"</p>",
          "price": 59.9,
          "currency": "shekel",
          "provider": {
              "_id": "5f1dacad08339e279014acb6",
              "name": "Udemy",
              "homepageURL": "www.udemy.com",
              "iconURL": "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
              "__v": 0
          },
          "language": "English",
          "lessons": [
              {
                  "_id": "5f1ea0a24896412bd80834f1",
                  "name": "Course Introduction",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834f2",
                  "name": "Big Picture Overview of Course (What To Expect)",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834f3",
                  "name": "Why HTML is Exciting",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834f4",
                  "name": "First Look at HTML",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834f5",
                  "name": "The Easiest Way to Get Started",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834f6",
                  "name": "Hands On! Create your First HTML File",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834f7",
                  "name": "Russian Stacking Dolls: Bulleted Lists",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834f8",
                  "name": "HTML Document Structure",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834f9",
                  "name": "First Look at Attributes: Linking Pages Together",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834fa",
                  "name": "Section 1 Review",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834fb",
                  "name": "Images",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834fc",
                  "name": "Audio Files",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834fd",
                  "name": "Video Files",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834fe",
                  "name": "Vector Graphics & Illustrations (SVG & Figma)",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd80834ff",
                  "name": "Headings",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083500",
                  "name": "Lists",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083501",
                  "name": "Bold & Italic",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083502",
                  "name": "Special Characters",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083503",
                  "name": "Semantic Structural Elements",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083504",
                  "name": "Navigation",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083505",
                  "name": "Non-semantic Elements (\"div\" and \"span\")",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083506",
                  "name": "HTML Comments",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083507",
                  "name": "The \"Section\" Element",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083508",
                  "name": "Forms",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083509",
                  "name": "Different Types of Inputs",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd808350a",
                  "name": "Choosing Between a set of options",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd808350b",
                  "name": "How to Create a Table of Data",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd808350c",
                  "name": "Do Not Use Tables for Layout",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd808350d",
                  "name": "CSS Introduction",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd808350e",
                  "name": "CSS Selectors",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd808350f",
                  "name": "The Cascade",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083510",
                  "name": "Box Model",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083511",
                  "name": "Quick Note About CSS Floats",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083512",
                  "name": "Creating a Page Layout with Floats",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083513",
                  "name": "Beauty School! Apply What We've Learned",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083514",
                  "name": "Styling Navigation Menu",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083515",
                  "name": "Overlapping Content & Transparent Backgrounds",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083516",
                  "name": "Styling Data Tables",
                  "description": ""
              },
              {
                  "_id": "5f1ea0a24896412bd8083517",
                  "name": "Styling Forms",
                  "description": ""
              }
          ],
          "imageURL": "https://img-a.udemycdn.com/course/480x270/246154_d8b0_3.jpg",
          "courseURL": "https://www.udemy.com/course/web-design-for-beginners-real-world-coding-in-html-css/",
          "__v": 0
      }
  ],
  "Providers": [
      "Udemy",
      "udacity"
  ],
  "maxPrice": 1000,
  "totalCourses": 6
}