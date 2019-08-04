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
        pageLoaded: this.and(this.isVisible($('div#page'))),
        Dedicated_Servers:$('#root > react-ui-view-adapter > div > div > div.Sidebar-sc-1wlrrwl-0.dAWDlW.FullSidebar-sc-13l16nf-0.dPgpwg > ul > li:nth-child(1) > span > span'),
        Order_Dedicated_Servers:$('#root > react-ui-view-adapter > div > div > div.Sidebar-sc-1wlrrwl-0.dAWDlW.FullSidebar-sc-13l16nf-0.dPgpwg > ul > li.MenuItem-sc-1s67l9r-0.gNWyho.expanded > ul > li:nth-child(2) > a > span'),
        Order_now:element(by.buttonText('Order now')),
        check_box_OS:$('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > ui-view > ui-view > form > div > div:nth-child(2) > div:nth-child(1) > radio-selector.ng-pristine.ng-untouched.ng-isolate-scope.ng-empty.ng-invalid.ng-invalid-required > configurator-block > div > div > ng-transclude > radio-selector-item:nth-child(6) > configurator-block-row > div > div.styles__col___qrch7 > div > div.styles__content___3zkmm > div'),
        check_box_SSH:$('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > ui-view > ui-view > form > div > div:nth-child(2) > div:nth-child(1) > radio-selector.ng-pristine.ng-untouched.ng-valid.ng-scope.ng-isolate-scope.ng-empty > configurator-block > div > div > ng-transclude > radio-selector-item:nth-child(1) > configurator-block-row > div > div.styles__col___qrch7 > div > div.styles__radio___1Lchd'),
        TB_SATA3_3_5: $('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > ui-view > ui-view > form > div > div:nth-child(2) > div:nth-child(1) > div.slots-container.ng-scope > server-raid-configurator > div > div:nth-child(1) > div > div:nth-child(1) > server-storage-drive-slot > div > label > main'),
        install_add_ons: $('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > ui-view > ui-view > form > div > div:nth-child(2) > div:nth-child(1) > div.software-packages > radio-selector > configurator-block > div > configurator-block-row > div > div.styles__col___qrch7 > span > header > span'),
        cPanel: $('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > ui-view > ui-view > form > div > div:nth-child(2) > div:nth-child(1) > div.software-packages > radio-selector > configurator-block > div > div > ng-transclude > radio-selector-item:nth-child(3) > configurator-block-row > div > div.styles__col___qrch7 > div > div.styles__content___3zkmm > div > h1'),
        Centos: $('body > div.modal.ng-scope.ng-isolate-scope.in > div > div > div > div:nth-child(2) > form > div.modal-body > div > div > div.configuration-selector-item-name.ng-binding'),
        input_hostname:element(by.name('hostname')),
        Change:element(by.buttonText('Change')),
        Continue:element(by.buttonText('Continue')),
        Add_to_card:element(by.buttonText('Add to cart')),
        logout:element(by.linkText('logout')),

    };

    this.loginAs = function(userObj) {
        this.login(userObj.username, userObj.password);
    };

    this.login = function(user, pass) {
        this.dict.userInput.sendKeys(user);
        this.dict.passInput.sendKeys(pass);
        this.dict.loginButton.click();
    };

    this.fillOrder = function() {
        this.dict.Dedicated_Servers.click();
        this.dict.Order_Dedicated_Servers.click();
        // expect(this.dict.Order_now.isDisplayed()).toBe(true);
        browser.sleep(2800);
        this.dict.Order_now.click();
        browser.sleep(2000);
        this.hitPageDown();
        browser.sleep(1000);
        this.dict.check_box_OS.click();
        // browser.sleep(1000);
        this.hitPageDown();
        browser.sleep(1000);
        this.dict.check_box_SSH.click();
        this.hitPageDown();
        browser.sleep(1000);
        this.dict.TB_SATA3_3_5.click();
        // browser.sleep(1000);
        // this.hitPageDown();
        this.hitPageDown();
        browser.sleep(1000);
        this.dict.install_add_ons.click();
        browser.sleep(1000);
        this.dict.cPanel.click();
        browser.sleep(1000);
        this.dict.Centos.click();
        browser.sleep(1000);
        this.dict.Change.click();
        browser.sleep(1000);
        this.hitEnd();
        // this.dict.input_hostname.sendKeys(protractor.Key.CLEAR);
        // browser.sleep(1000);
        this.dict.input_hostname.sendKeys('.com');
        browser.sleep(500);
        this.dict.Add_to_card.click();
        browser.sleep(1000);
        this.dict.Continue.click();
        browser.sleep(1000);
        this.hitHome();
        this.dict.login_email.click();
        browser.sleep(2000);
        this.dict.logout.click();
        browser.sleep(2000);

    };
};
LoginPage.prototype = basePage; // extend basePage...
module.exports = new LoginPage();