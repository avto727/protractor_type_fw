var elemPage = function() {
    this.dict = {
        url: "/#/dashboard",
        userInput:element(by.name('email')),
        passInput:element(by.name('pwd')),
        loginButton:$('.form-bttns.h4 > button'),
        errorMessage:$('div.alert.alert-danger'),
        login_email:$('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > div > nav > div > div > button > span'),
        pageLoaded: this.and(this.isVisible($('div#page')))
    };
};

module.exports = {
    elemPage:elemPage
};