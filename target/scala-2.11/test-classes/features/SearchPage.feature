@wip
Feature: DVLA Start page

  As a vehicle owner,
  I want to search for my vehicle details,
  So that I know what information the DVLA holds about my vehicle

  Scenario: Verify the text on the Search page
    Given I am on the "Search" page
    Then the following text should be present on the page:
      | id                           | value                                                                                             |
      | Search Heading               | Details of the vehicle being checked                                                              |
      | Search info                  | To make an enquirythe vehicle registration number and the vehicle make                            |
      | Registration Number          | Registration number                                                                               |
      | Vehicle Make                 | Vehicle make                                                                                      |
      | V5C Document Ref Number Info | To check the vehicle tax rates and date of the latest V5C, please enter the V5C reference number. |
      | V5C Document Ref Number      | V5C document reference number (optional)                                                          |


  Scenario: Registration number is mandatory
    Given I am on the "Search" page
    When I click the "Search" button
    Then I should see the following error message: Please enter your registration number

  Scenario: Vehicle make is mandatory
    Given I am on the "Search" page
    When I click the "Search" button
    Then I should see the following error message: You must select your vehicle make from the list

  Scenario: Check invalid entry - Registration number
    Given I am on the "Search" page
    And I enter the following data into the form
      | field               | value | type |
      | Registration Number |       |      |
      | Vehicle Make        |       |      |
    When I click the "Search" button
    Then I should see the following error message: You must enter your registration number in a valid format


