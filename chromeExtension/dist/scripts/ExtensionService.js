class ExtensionService {
  constructor() {
    this.userID
    this.userName
  }

  updateUserInfo() {
    chrome.storage.sync.get(["userName", "userID"], (items) => {
      this.userID = items.userID
      this.userName = items.userName
    })
  }

  sendUpdateToServer = (providerName, progress, URL) => {
    $.ajax({
      url: 'https://onlife.herokuapp.com/extension/updateProgress/',
      type: 'PUT',
      data: `progress=${progress}&userId=${this.userID}&providerName=${providerName}&courseURL=${URL}`,
      success: async function  (data) {
        await chrome.runtime.sendMessage({})
        console.log("SENT")
        console.log(data)
      }
    })
  }
}