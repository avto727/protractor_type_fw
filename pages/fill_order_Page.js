browser.ignoreSynchronization = true;
var basePage = require('./basePage.js');

var LoginPage = function() {
    this.dict = {
        url: "/#/dashboard",
        userInput:element(by.name('email')),
        passInput:element(by.name('pwd')),
        loginButton:$('.form-bttns.h4 > button'),
        errorMessage:$('div.alert.alert-danger'),
        login_email:$('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > div > nav > div > div > button > span'),
        pageLoaded: this.and(this.isVisible($('div#page')))
        };

    this.loginAs = function(userObj) {
        this.login(userObj.username, userObj.password);
    };

    this.login = function(user, pass) {
        this.dict.userInput.sendKeys(user);
        this.dict.passInput.sendKeys(pass);
        this.dict.loginButton.click();
    };
};
LoginPage.prototype = basePage; // extend basePage...
module.exports = new LoginPage();