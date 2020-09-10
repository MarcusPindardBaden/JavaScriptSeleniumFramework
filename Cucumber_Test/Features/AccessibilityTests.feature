
Feature: : Testing the accessibility of a webpage
Scenario Outline: Checking that the links in the different sections are keyboard focusable
Given I have loaded Google
When I search for a "<word>"
And I click on a link for "<title>"
Then the links on a certain "<section>" section should be keyboard accessible
Examples:
| word | title | section |
| accessibility bbc | My Web My Way - What is accessibility? - BBC | Best practice |

@accessibility
Scenario Outline: Making sure the number of accessibility violations is 0
Given I have loaded Google
When I search for a "<word>"
And I click on a link for "<title>"
Then the number of accessibility violations on that page should be zero
Examples:
| word | title |
| accessibility bbc | My Web My Way - What is accessibility? - BBC |
