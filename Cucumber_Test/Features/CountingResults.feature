@Count
Feature: Different counters on google search pages
Scenario Outline: User gets the same amount of actual results on every search
Given I have loaded Google
When I search for a "<word>"
Then there should only be "10" organic results for the "<word>"
Examples:
| word |
| adorable big dogs |
| frighteningly large spiders |
| how far can you throw mud |
| home |
| largest gathering of vibes |
