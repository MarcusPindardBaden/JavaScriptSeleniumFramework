@Test1
Feature: user loads google

Scenario: user loads up google and searches for Selenium
Given I have loaded Google
When I search for "selenium"
Then the first result is "Selenium Foods: 20 Selenium-Rich Foods for Every Diet"