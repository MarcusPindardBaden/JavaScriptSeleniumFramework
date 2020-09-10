const {After} = require('selenium-webdriver');
// const puppeteer = require('puppeteer');
// const fs = require('fs');


module.exports = function() 
{
    // before(async() => 
    // {
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto('https://google.co.uk')
    // });
    
    after(function()
    {
        return browser.quit();
    });
};