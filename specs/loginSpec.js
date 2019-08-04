var loginPage = require('../pages/loginPage');
var userData = require('../data/userData');

describe ('Test case login 2 invalid + 1 valid ', function() {
    beforeEach(function() {
        loginPage.to();
        loginPage.at();
    });

    it('should display message for invalid credentials', function() {
        loginPage.login('invalid_user@mail.ru', 'invalid_password');
        expect(loginPage.dict.errorMessage.isDisplayed()).toBe(true);
    });

    it('should display message for empty credentials', function() {
        loginPage.login('', '');
        // expect(loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should goto friend pages on successful login', function() {
        loginPage.loginAs(userData.testUser);
        expect(loginPage.dict.login_email.isDisplayed()).toBe(true);
        // expect(loginPage.at()).toBeTruthy();
    });
});