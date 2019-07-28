Feature: UI automation 

  Scenario: generate borrowing estimate
    Given the user login to calculater application
    When the user tries to get the estimation of the amount that is to be barrowed
    And click on "Work out how much I could borrow"
    Then Application should display "$479,000" as the estimated amount that user can borrow
    And click on "Start over"
    Then all field values should become empty

  Scenario: message to be displayed if the living expenses value is 1
    Given the user login to calculater application
    When the user tries to get the estimation of the amount 1
    And click on "Work out how much I could borrow"
    Then Application should display "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641."



