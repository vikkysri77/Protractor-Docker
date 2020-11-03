const { browser, element, ExpectedConditions } = require('protractor');


let loginPage=require("../Pages/angularLoginPage");

describe('Login Angular Web page', function() {
    beforeEach(function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
});

it('Verify success Login', function() { 
    loginPage.login("angular","password","hello");
    expect(loginPage.getLoginSuccesElement().isDisplayed()).toBe(true);

});

});