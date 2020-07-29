let loggedUser = { loggedUser: { userName: '', userID: '' } }

$('.button-tab').click((event) => {
    const content = $(event.currentTarget).val()
    $('#loginSignup-button').text(content)
    $('#loginSignup-button').val(content.toLowerCase())
})

$('#loginSignup-button').click(async () => {
    const userName = $('#enter-username').val()
    const password = $('#enter-pass').val()

    const endPoint = $('#loginSignup-button').val()
    $.ajax({
        url: `https://onlife.herokuapp.com/auth/${endPoint}`,
        method: 'POST',
        data: { userName, password },
        success: handleUserLoginSignupSuccess,
        error: handleUserLoginSignupError
    })
})

const checkIfUserLoggedIn = function () {
    if (localStorage.onLife) {
        loggedUser = JSON.parse(localStorage.onLife)
    }
}()

const renderLoginError = (msg) => {
    $('#err-msg').text(msg)
}

const renderSuccessLogin = (username) => {
    $('#err-msg').text('')
    $('.loginSignup-container').empty()
    $('.button-login-signup').hide()
    $('.button-username').text(username)
}


const logUserIn = (userName, userID) => {
    loggedUser.loggedUser.userID = userID
    loggedUser.loggedUser.userName = userName
    localStorage.setItem('onLife', JSON.stringify({ loggedUser: { userName, userID } }))
}

const handleUserLoginSignupSuccess = (res) => {
    logUserIn(res.userName, res.userID)
    renderLoginError(`Hello ${res.userName}! Logged in!`)
    chrome.runtime.sendMessage(
        { userName: res.userName, userID: res.userID },
        () => { console.log(`saved ${res.userName}, ${res.userID}`) }
    )
    window.setTimeout(function () {
        renderSuccessLogin(res.userName)
    }, 1000)
}

const handleUserLoginSignupError = (e) => {
    renderLoginError(e.responseText)
}