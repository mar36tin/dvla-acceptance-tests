
Feature: DVLA Start page

  As a vehicle owner,
  I want to search for my vehicle details,
  So that I know what information the DVLA holds about my vehicle

  Scenario: Verify that the Start now link
    Given vehicle owner navigates to "index page"
    Then the "Start now" link should be visible

  @wip
  Scenario: Verify that when I click the start now link i am redirected to the search page
    Given the vehicle owner clicks the "Start now" button
    Then they shouldbe redirected to the "search page"


