'use strict';
const { Given, When, Then } = require('cucumber');
const assert = require ('assert');
const webdriver = require('selenium-webdriver');
const Gpage = require('C:\\Users\\marcu\\Desktop\\JavaScriptSeleniumFramework\\Cucumber_Test\\Page-Objects\\googleSearch');

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
    });