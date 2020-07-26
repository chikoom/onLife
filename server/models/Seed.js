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