const { browser, element, ExpectedConditions } = require('protractor');


let loginPage=require("../Pages/angularLoginPage");

describe('Logout Angular Web page', function() {
    beforeEach(function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login').then(function(){
        loginPage.login("angular","password","hello");
      });

});

it('Verify success logout', function() { 
   loginPage.clickLogoutLink();
   expect(loginPage.getCredendialInfoElement().isDisplayed()).toBe(true); 

});

});