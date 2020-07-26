
const testProvider = new Provider({
    name: "Udemy",
    homepageURL: "www.udemy.com",
    iconURL: "www.udemy.com/icon.png"
});

const testCourse = new Course({
    providerCourseId: "String",
    name: "String",
    slug: "String",
    description: "String",
    price: 500,
    currency: "String",
    provider: testProvider,
    language: "String",
    subtitlesLanguages: ["String"],
    lessons: [{name: "String", description: "String"}],
    imageURL: "String",
    videoURL: "String",
    courseURL: "String"
})

const testUser = new User ({
    userName: "ElonMusk",
    password: "jedke4f",
    courses: [{"course": testCourse, "progress": 0.7 }]
})
// testProvider.save()
// testCourse.save()
// testUser.save()