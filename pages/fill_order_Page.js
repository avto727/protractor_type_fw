var basePage = require('./basePage.js');

var LoginPage = function() {

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