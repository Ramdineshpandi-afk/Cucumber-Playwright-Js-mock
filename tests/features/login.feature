Feature: Login functionality for sauce demo site

Scenario: Standard user logs in 
    Given I am on sauce demo login page as "standard_user"
    When I login as "standard_user"

Scenario: Locked user logs in 
    Given I am on sauce demo login page as "locked_user"
    When I login as "locked_user"