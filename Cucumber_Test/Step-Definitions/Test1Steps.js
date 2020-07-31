'use strict';
const { Given, When, Then, By } = require('cucumber');
const assert = require ('assert');
const webdriver = require('selenium-webdriver');
const Gpage = require('C:\\Users\\marcu\\Desktop\\JavaScriptSeleniumFramework\\Cucumber_Test\\Page-Objects\\googleSearch');


//  Given I have loaded Google
    Given('I have loaded Google', async () => 
    {
        browser.url("/");
        // await browser.maximizeWindow();
    });

//  When I search for "selenium"
    When('I search for {string}', async (string) =>
    {
        await Gpage.searching(string);
    });

//  Then the first result is "7 Science-Based Health Benefits of Selenium - Healthline"
    Then('the first result is {string}', async (string) =>
    {
        const firstTitle = await Gpage.returnFirstTitle();
        console.log(firstTitle);
        assert.equal(firstTitle, string);
        console.log("test finished");
    });