'use strict';
const google = require('C:\\Users\\marcu\\Desktop\\JavaScriptSeleniumFramework\\Cucumber_Test\\SharedObjects\\googleElements');
module.exports = 
{
    // Clicks the google search bar and enters a specified input, then hits enter
    async searching(input)
    {
        let searchBar = await browser.$(google.searchBar);
        await searchBar.waitForDisplayed(5000);
        await searchBar.click();
        await searchBar.setValue(input);
        await driver.keys('Enter');
    },

    async waitForDisplay(elementPath)
    {
        let element = await browser.$(elementPath);
        await element.waitForDisplayed(30000);
    },

    // Finds the first web result on page, converts the title to a text, and returns the text
    async returnFirstTitle()
    {
        const title = await browser.$(google.firstResult);
        await title.waitForDisplayed(5000);
        const text = await title.getText();
        console.log(text);
        await browser.pause(2000);
        return text;
    },

    // Gets a list of all web results that are non paid, 
    // then checks if any are under 'People also ask'. If under, they will not be added to the new list.
    // Lastly returns a counter of how many results are left  
    async getOrganicList(input)
    {
        const initialList = await browser.$$(google.nonAdResult);
        console.log(initialList.length);
        const organicList = [];
        for(var i =0; i<initialList.length; i++)
        {
            let result = initialList[i];
            let parent1 = await result.$('..');
            let parent2 = await parent1.$('..');
            let parent3 = await parent2.$('..');
            let parent4 = await parent3.$('..');
            let child = await result.$(':first-child');
            let att = await child.getAttribute('class');
            let tag = await parent4.getTagName();
            if(tag == 'g-accordion-expander' || att == 'cE3GYd vk_c')
            {
                console.log('result is for another query, will be removed');
            }
            else
            {
                console.log('result is organic, will stay');
                organicList.push(result);
            }
        };
        console.log(organicList.length);
        // Now we're going to add the extra searches that can appear on the main results page, 
        // such as images and videos link 
        const extraList = await browser.$$(google.extraSearches);
        for(var j=0; j<extraList.length;j++)
        {
            let result = extraList[j];
            let subElement = await result.$('h3');
            let subElText =  await subElement.getText();
            if(subElText == 'Searches related to '+input)
            {
                extraList.splice(j,1);
                console.log('result is for another query, will be removed');
            }
            else
            {
                console.log('result is organic, will stay');
            }
        };
        console.log(extraList.length);
        const fullList = await organicList.concat(extraList);
        return fullList.length;
    },

    async CountingTabs() 
    {
        const navBar = await browser.$(google.navBar);
        const visibleTabs = await navBar.$$(google.visibleTabs);
        const focusTab = await navBar.$(google.inFocusTab);
        await visibleTabs.push(focusTab);
        const moreTabsButton = await browser.$(google.moreTabs);
        await moreTabsButton.click();
        const hiddenList = await browser.$$(google.extraTabsList);
        const fullList = await visibleTabs.concat(hiddenList);
        return fullList.length;
    }

}