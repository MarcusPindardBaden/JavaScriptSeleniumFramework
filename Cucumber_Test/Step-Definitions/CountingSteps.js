'use strict';
const { Given, When, Then } = require('cucumber');
const assert = require ('assert');
const webdriver = require('selenium-webdriver');
const Gpage = require('C:\\Users\\marcu\\Desktop\\JavaScriptSeleniumFramework\\Cucumber_Test\\Page-Objects\\googleSearch');
const elements = require('C:\\Users\\marcu\\Desktop\\JavaScriptSeleniumFramework\\Cucumber_Test\\SharedObjects\\googleElements');

// And I search for something
    When('I search for a {string}', async (string) =>
    {
        await Gpage.searching(string);
    });

//  Then there should only be "10" organic results for the query
    Then('there should only be {string} organic results for the {string}', async (string, string2) =>
    {
        const numberOfResults = await Gpage.getOrganicList(string2);
        assert.equal(numberOfResults, string);
        console.log("test finished");
    });

//  Then there should always be "9" sub tabs to go between
    Then('there should always be {string} sub tabs to go between', async (string) =>
    {
        await Gpage.waitForDisplay(elements.firstResult);
        const actualNumber = await Gpage.CountingTabs();
        assert.equal(actualNumber, string);
        console.log("test finished");
    });