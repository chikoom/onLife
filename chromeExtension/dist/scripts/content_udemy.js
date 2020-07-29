console.log('content udemy')

let userName
let userID

chrome.storage.sync.get(["userName", "userID"], (items) => {
  userID = items.userID
  userName = items.userName
})

// const test = JSON.parse(localStorage.onLife)
// console.log(test)
// chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
//   userName = req.userName
//   userID = req.userID

//   sendRes({ msg: 'ok' })
// })

// const exService = new ExtensionService()
// const userId = exService.currentUserId
const providerName = 'udemy'

const sendUpdateToServer = (userId, providerName, progress, URL) => {
  $.ajax({
    url: 'https://onlife.herokuapp.com/extension/updateProgress/',
    type: 'PUT',
    data: `progress=${progress}&userId=${userId}&providerName=${providerName}&courseURL=${URL}`,
    success: function (data) {
      console.log("SENT")
      console.log(data)
    }
  })
}

const getCurrentURL = () => {
  const currentFullURL = window.location.href
  const learnIndex = currentFullURL.indexOf("/learn")
  const courseIndex = currentFullURL.indexOf("/course")
  const courseURL = currentFullURL.substring(0, learnIndex)
  const shorterURL = courseURL.substring(21)
  return shorterURL
}

const getProgressFromPage = () => {
  $("[class^=progress--progress-container]").click()
  let progressText = $("[class^=progress-popover-content--progress-text]").text()
  $("[class^=popover--close-]").click()
  let myRegexp = /(\d+ )/g
  let match = progressText.match(myRegexp)
  const progress = (parseInt(match[0]) / parseInt(match[1])).toFixed(2)
  return progress
}

$(document).ready(function () {

  setTimeout(function () {

    const currentProgress = getProgressFromPage()
    const currentURL = getCurrentURL()
    console.log("SENDING")
    sendUpdateToServer(userID, providerName, currentProgress, currentURL)

    $('body').on('click', "[class^=next-and-previous--button]", function () {
      const currentProgress = getProgressFromPage()
      const currentURL = getCurrentURL()
      console.log("SENDING")
      sendUpdateToServer(userID, providerName, currentProgress, currentURL)
    })
  }, 3000)
})




