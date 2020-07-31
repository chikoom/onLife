$('.button-tab').click((event) => {
    const content = $(event.currentTarget).val()
    $('#loginSignup-button').text(content)
    $('#loginSignup-button').val(content.toLowerCase())
})

const handleLogInSignUpButton = () => {
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
}

$('#loginSignup-button').click(handleLogInSignUpButton)

const checkIfUserLoggedIn = function () {
    if (localStorage.onLife) {
        loggedUser = JSON.parse(localStorage.onLife)
    }
}()

const renderLoginError = (msg) => {
    $('#err-msg').text(msg)
}

const renderSuccessLogin = (userName) => {
    $('#err-msg').text('')
    $('.loginSignup-inner-form').empty()
    $('#loginSignup-button').hide()
    $('.loginSignup-inner-form').append($(`<h1 class="userName">Logged In as<br>${userName}</h1>`))
}

const handleUserLoginSignupSuccess = (res) => {
    chrome.storage.sync.set({ "userName": res.userName, "userID": res.userID }, () => { console.log('saved') })
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

const enterKeySearch = (e) => {
    console.log(e.key, e.keyCode)
    if (e.key === 'Enter' || e.keyCode === 13) {
        handleLogInSignUpButton()
    }
};

$('body').on('keyup', enterKeySearch)