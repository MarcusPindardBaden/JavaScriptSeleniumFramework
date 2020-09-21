'use strict';
const { Given, When, Then } = require('cucumber');
const assert = require ('assert');
const webdriver = require('selenium-webdriver');
const Gpage = require('C:\\Users\\marcu\\Desktop\\JavaScriptSeleniumFramework\\Cucumber_Test\\Page-Objects\\googleSearch');
const BBCPage = require('C:\\Users\\marcu\\Desktop\\JavaScriptSeleniumFramework\\Cucumber_Test\\Page-Objects\\BBCPage');
const googleElements = require('../SharedObjects/googleElements');
const AxeBuilder  = require('axe-webdriverjs');
const axe = require('axe-core');
const axeSource = require('axe-core').source;

// And I click on a link for a website
    When('I click on a link for {string}', async(string)  => 
    {
        await Gpage.waitForDisplay(googleElements.firstResult);
        await browser.pause(1000);
        const first = await Gpage.returnFirstTitle();
        await Gpage.pickTheGooglePage(string);
    });

//  Then the links on a certain "Best practice" section should be keyboard accessible
    Then('the links on a certain {string} section should be keyboard accessible', async(string) =>
    {
        await browser.pause(1000);
        // const elementList = await BBCPage.getSidePanelElementsList(string);
    });



// Then the number of accessibility violations on that page should be zero
    Then('the number of accessibility violations on that page should be zero', function () 
    {
        browser.pause(2500);
        browser.execute(axeSource);
        //    Run inside the browser and get results
        let results = browser.executeAsync(function(done)
        {
            // run axe on the site
            axe.run(function(err, results)
            {
                window.results = results;
                if(err) done(err);
                done(results);
            });

        });
        // assert there are no violations on the page
        console.log(testArray);
        console.log(testArray.toString());
        assert(results.violations.length == 0, testArray);
    })