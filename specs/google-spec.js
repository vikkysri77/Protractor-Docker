const { browser, element } = require('protractor');
const { protractor } = require('protractor/built/ptor');


describe('Non angular page test scenario', function() {
  beforeEach(function() {
    browser.ignoreSynchronization=true;
    browser.get('https://www.google.co.in/');
  });
  
  it('Search for india', function() { 
    element(By.className("gLFyf gsfi")).sendKeys("India" +protractor.Key.ENTER);
    expect(browser.getTitle()).toContain("India");
  });

  it('Search for USA', function() { 
    element(By.className("gLFyf gsfi")).sendKeys("USA" +protractor.Key.ENTER);
    expect(browser.getTitle()).toContain("USA");
  });

});

