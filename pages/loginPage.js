
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
        confirmDelete:element(by.buttonText('Delete')),
        check_box_OS:element(by.xpath('//*[@id="root"]/react-ui-view-adapter/div/div/div[2]/ui-view/ui-view/ui-view/form/div/div[2]/div[1]/radio-selector[4]/configurator-block/div/div/ng-transclude/radio-selector-item[6]/configurator-block-row/div/div[1]/div/div[1]')),
        check_box_SSH:$('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > ui-view > ui-view > form > div > div:nth-child(2) > div:nth-child(1) > radio-selector.ng-pristine.ng-untouched.ng-valid.ng-scope.ng-isolate-scope.ng-empty > configurator-block > div > div > ng-transclude > radio-selector-item:nth-child(1) > configurator-block-row > div > div.styles__col___qrch7 > div > div.styles__radio___1Lchd'),
        TB_SATA3_3_5: $('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > ui-view > ui-view > form > div > div:nth-child(2) > div:nth-child(1) > div.slots-container.ng-scope > server-raid-configurator > div > div:nth-child(1) > div > div:nth-child(1) > server-storage-drive-slot > div > label > main'),
        install_add_ons: $('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > ui-view > ui-view > form > div > div:nth-child(2) > div:nth-child(1) > div.software-packages > radio-selector > configurator-block > div > configurator-block-row > div > div.styles__col___qrch7 > span > header > span'),
        cPanel: $('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > ui-view > ui-view > form > div > div:nth-child(2) > div:nth-child(1) > div.software-packages > radio-selector > configurator-block > div > div > ng-transclude > radio-selector-item:nth-child(3) > configurator-block-row > div > div.styles__col___qrch7 > div > div.styles__content___3zkmm > div > h1'),
        Centos: $('body > div.modal.ng-scope.ng-isolate-scope.in > div > div > div > div:nth-child(2) > form > div.modal-body > div > div > div.configuration-selector-item-name.ng-binding'),
        input_hostname:element(by.name('hostname')),
        Change:element(by.buttonText('Change')),
        Continue:element(by.buttonText('Continue')),
        Add_to_card:element(by.buttonText('Add to cart')),
        Card:element(by.js('document.querySelector("#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > div > nav > div > a > i")')),
        logout:element(by.xpath('.//span[text()="Logout"]')),
        // deleteOrder:$('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > div > div.panel-body > div > div:nth-child(2) > form > table > tbody > tr:nth-child(1) > td.text-right.cart-table-actions > a.btn.btn-sm.btn-danger'),
        deleteOrder:$('#root > react-ui-view-adapter > div > div > div.Content-sc-1av4hia-0.eDWmeO > ui-view > div > div.panel-body > div > div:nth-child(2) > form > table > tbody > tr:nth-child(1) > td.text-right.cart-table-actions > a.btn.btn-sm.btn-danger > i'),
        cartEmpty:element(by.xpath('.//i[@class="fa fa-info-circle"]')),
    };

    this.loginAs = function(userObj) {
        this.login(userObj.username, userObj.password);
    };

    this.login = function(user, pass) {
        this.dict.userInput.sendKeys(user);
        this.dict.passInput.sendKeys(pass);
        this.dict.loginButton.click();
    };

    // browser.wait(function() {
    //     return element(by.css("#edudrop1")).isPresent();});

    this.fillOrder = function() {
        this.isClickPresent(this.dict.Dedicated_Servers, '1');
        this.isClickPresent(this.dict.Order_Dedicated_Servers, '2');
        this.isClickPresent(this.dict.Order_now, '3');
        this.hitPageDown();
        this.isClickPresent(this.dict.check_box_OS, '4');
        this.hitPageDown();
        this.isClickPresent(this.dict.check_box_SSH, '5');
        this.hitPageDown();
        this.isClickPresent(this.dict.TB_SATA3_3_5, '6');
        this.hitPageDown();
        this.isClickPresent(this.dict.install_add_ons, '7');
        this.isClickPresent(this.dict.cPanel, '8');
        this.isClickPresent(this.dict.Centos, '9');
        this.isClickPresent(this.dict.Change, '10');
        browser.sleep(300);
        this.hitEnd();
        this.isClickPresent(this.dict.input_hostname, '10');
        this.isSendKeysWait(this.dict.input_hostname, 'a.com', '11');
        this.isClickPresent(this.dict.Add_to_card, '12');
        this.isClickPresent(this.dict.Continue, '13');
        browser.sleep(300);
        this.hitHome();
        this.isClickPresent(this.dict.deleteOrder, '15');
        this.isClickPresent(this.dict.confirmDelete, '15');
        this.isWait(this.dict.cartEmpty, 16);
        this.isClickPresent(this.dict.login_email, '17');
        this.isClickPresent(this.dict.logout, '18');
        this.isWait(this.dict.loginButton, 19);

    };
};
LoginPage.prototype = basePage; // extend basePage...
module.exports = new LoginPage();