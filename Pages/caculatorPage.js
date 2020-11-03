const { element } = require("protractor");

var EC = protractor.ExpectedConditions;
let calculatorPage=function(){

   let firstNumberField=element(by.model("first"));
   let operatorDropDown=element(by.model("operator"));
   let allOperators=element.all(by.css("select>option"));
   let secondNumberField=element(by.model("second"));
   let goBtn=element(by.id("gobutton"));
   let result=element(by.css("h2.ng-binding"));
   
   this.enterFirstNumber=function(value){
        firstNumberField.sendKeys(value);
   }

   this.clickOperatorDropDown=function(){
       operatorDropDown.click();
   }

   this.selectOperator=function(operator){
       allOperators.each(function(item){
           item.getText().then(function(itemName){
                if(itemName==operator){
                    item.click();
                }
           })
       })
   }

   this.enterSecondNumber=function(value){
        secondNumberField.sendKeys(value);
   }

   this.clickGoBtn=function(){
       goBtn.click();
   }

   this.performSUMOperation=function(n1,n2){
        this.enterFirstNumber(n1);
        this.selectOperator("+");
        this.enterSecondNumber(n2);
        this.clickGoBtn();
   }

   this.getResult=function(){
       return result.getText().then(function(resultDisplayed){
            return resultDisplayed;
       });
   }



   this.sum=function(n1,n2){
        return n1+n2;
   }





}

module.exports=new calculatorPage();