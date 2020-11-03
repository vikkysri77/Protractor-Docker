const { element } = require("protractor");

var EC = protractor.ExpectedConditions;
let angularLoginPage=function(){

    let userNameInputField=element(by.id("username"));
    let passwordInputField=element(by.id("password"));
    let userNameMandatoryInput=element(by.id("formly_1_input_username_0"));
    let loginBtn=element(by.css("button[ng-click='Auth.login()']"));
    let loginSuccesElement=element(by.xpath("//h1[text()='Home']"));
    let logoutLink=element(by.xpath("//a[text()='Logout']")); 
    let credendialInfo=element(by.css("div[class*='alert alert-info ng-scope']"));

    this.sendUserName=function(userName){
        userNameInputField.sendKeys(userName);
    }

    this.sendPassword=function(password){
        passwordInputField.sendKeys(password);
    }

    this.sendUserNameMandatory=function(userName){
        userNameMandatoryInput.sendKeys(userName);
    }

    this.clickLoginBtn=function(){
        loginBtn.click();
    }

    this.getLoginBtn=function(){
        browser.wait(EC.elementToBeClickable(loginBtn),5000);
        return loginBtn;
    }


    this.getLoginSuccesElement=function(){
        browser.wait(EC.elementToBeClickable(loginSuccesElement),5000);
        return loginSuccesElement;
    }

    this.getLogout=function(){
        browser.wait(EC.elementToBeClickable(logoutLink),5000);
        return logoutLink;
    }

    this.clickLogoutLink=function(){
        this.getLogout().click();
       
       
    }

    this.login=function(userName,password,userNameMandatory){
        this.sendUserName(userName);
        this.sendPassword(password);
        this.sendUserNameMandatory(userNameMandatory);
        this.clickLoginBtn();
    }

    this.getCredendialInfoElement=function(){
        return credendialInfo;
    }



}

module.exports=new angularLoginPage();
