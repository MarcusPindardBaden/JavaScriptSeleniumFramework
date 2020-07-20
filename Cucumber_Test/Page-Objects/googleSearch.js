'use strict';
const google = require('C:\\Users\\marcu\\Desktop\\BasicTestFramework\\Cucumber_Test\\SharedObjects\\googleElements');
module.exports = 
{
    async searching(input)
    {
        let searchBar = await browser.$(google.searchBar);
        await searchBar.waitForDisplayed(5000);
        await searchBar.click();
        await searchBar.setValue(input);
        await driver.keys('Enter');
    },

    async returnFirstTitle()
    {
        const title = await browser.$(google.firstResult);
        await title.waitForDisplayed(5000);
        const text = await title.getText();
        console.log(text);
        await browser.pause(2000);
        return text;
    }
}