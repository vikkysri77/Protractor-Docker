const { browser, element, ExpectedConditions } = require('protractor');
let calculator=require("../Pages/caculatorPage");

describe('Calculator', function() {
    beforeEach(function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
});

it('Verify calculator SUM functionality', function() { 
    calculator.performSUMOperation(1,2);
    calculator.getResult().then(function(result){
        var sum=calculator.sum(1,2)+"";
        expect(result).toEqual(sum);
    });

});

});