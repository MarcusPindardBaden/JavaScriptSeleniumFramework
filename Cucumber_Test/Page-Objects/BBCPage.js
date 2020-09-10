'use strict';
const BBC = require('C:\\Users\\marcu\\Desktop\\JavaScriptSeleniumFramework\\Cucumber_Test\\SharedObjects\\BBCElements.js');
const AxeBuilder = require('axe-webdriverjs');
module.exports =
{
    async getSidePanelElementsList(text)
    {
        const sideContent = await browser.$(BBC.sideContent);
        const panelList = await sideContent.$$(BBC.sidePanel);
        let panelNumber;
        for(let element of panelList)
        {
            let elemText = await element.getText();
            console.log(elemText);
            if(elemText.includes(text))
            {
                panelNumber = panelList.indexOf(element);
                console.log(panelNumber);
                break;
            }
        }
        console.log(panelNumber);
        const selectedPanel = await panelList[panelNumber];
        console.log(selectedPanel);
        const hyperLinksList = await selectedPanel.$$('a');
        console.log(hyperLinksList.length);
        return hyperLinksList;
        
    },

    // analyseTheElements(elementList)
    // {
    //     console.log(elementList);
    //     console.log(elementList.length);
    //     AxeBuilder(browser)
    //     .analyze(function(results)
    //     {
    //         console.log(results.violations)
    //         // let truth = elementList.every(x=>x.violations.length == 0)
    //         // return truth;
    //         return results.violations.length == 0;
    //     }) 
    // }
}