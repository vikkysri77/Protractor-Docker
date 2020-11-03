var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
framework: "jasmine",
specs: ["./specs/google-spec.js","./specs/angularLogin.js","./specs/angularLogout.js","./specs/calculator.js"],

directConnect : true,
capabilities :{
	    browserName: "chrome",
         chromeOptions: {
            args: ["--headless","--no-sandbox","--disable-dev-shm-usage","--window-size=1920,1080"]
        }

    },
jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
onPrepare:function(){
	var reportName =browser.params.reportName
           jasmine.getEnv().addReporter(
                new Jasmine2HtmlReporter({
                  savePath: 'target/screenshots',
		  fileName: reportName,
                })
              );
	 }

}
