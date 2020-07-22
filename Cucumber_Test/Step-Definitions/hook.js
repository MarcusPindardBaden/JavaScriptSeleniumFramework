const {After} = require('selenium-webdriver');

module.exports = function() 
{
    After(function()
    {
        return this.driver.quit();
    });
};