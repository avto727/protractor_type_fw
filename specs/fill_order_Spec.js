/**
 * Example tests login and fill order
 */
var loginPage = require('../pages/loginPage'); // путь до файла
var userData = require('../data/userData');

describe ('angular app', function() {

    it('login at site + fill order', function() {
        loginPage.to();
        browser.driver.manage().window().maximize();
        loginPage.loginAs(userData.testUser);
        expect(loginPage.dict.login_email.isDisplayed()).toBe(true);
        loginPage.fillOrder();
    });

    // it('should to fill order', function() {
        // expect(friendPage.inResults('Paul')).toBeFalsy();
    // });

    // it('should not display non-found search terms', function() {
    //     friendPage.searchFor('poo!!!');
    //
    //     expect(friendPage.rows.count()).toBe(0);
    // });
    //
    // it('should display found search terms', function() {
    //     friendPage.searchFor('Paul');
    //
    //     expect(friendPage.inResults('Paul')).toBeTruthy();
    // });
    //
    // it('should display no rows when all friends deleted', function() {
    //     friendPage.deleteAllFriends();
    //     friendPage.at(); // protect against false positives...
    //
    //     expect(friendPage.rows.count()).toBe(0);
    // });
    //
    // it('should display actual count before saving new friend', function() {
    //     friendPage.addnameBox.sendKeys('Some text...');
    //
    //     expect(friendPage.actualCount.getText()).toEqual('(only 3 actually....)');
    // });
});
