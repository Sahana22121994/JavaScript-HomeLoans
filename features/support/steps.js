const { Given, When, Then, After, Before,setDefaultTimeout } = require("cucumber");
const pageObject= require("../support/pageObject");

setDefaultTimeout(async function(){
  setDefaultTimeout(60 *1000);
});
Before(async function() {
   await this.loginToApplication();
});

After(async function() {
  return await this.closeTodoPage();
});

Given(/^the user login to calculater application$/,async function () {
 // await this.loginToApplication();
});

When(/^the user tries to get the estimation of the amount that is to be barrowed$/,async function () {
  await this.enterTextBox(pageObject.yourIncome,"80000");
 await this.enterTextBox(pageObject.yourOtherIncome,"10000");
 await this.enterTextBox(pageObject.livingExpenses,"500");
 await this.enterTextBox(pageObject.currentHomeLoanRepayments,"0");
 await this.enterTextBox(pageObject.otherLoanRepayments,"100");
 await this.enterTextBox(pageObject.otherCommitments,"0");
 await this.enterTextBox(pageObject.totalCreditCardLimits,"10000");
});

Then(/^Application should display \"([^\"]*)\" as the estimated amount that user can borrow$/,async function (amt) {
  await this.checkElementValue(pageObject.amt,"$467,000");
});

Then(/^all field values should become empty$/,async function () {
  await this.attachScreenshot("emptyfields");
});

Then(/^click on \"([^\"]*)\"$/,async function (button) {
  if(button=="Work out how much I could borrow"){
    await this.checkElementExist(pageObject.workOutHowMuchICouldBorrow);
 await this.clickElement(pageObject.workOutHowMuchICouldBorrow);
  }else if(button=="Start over"){
    await this.clickElement(pageObject.startOver);
  }
});
Then(/^Application should display \"([^\"]*)\"$/,async function (message) {
  await this.checkElementValue(pageObject.message,"Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641.");
});
When(/^the user tries to get the estimation of the amount 1$/,async function () {
  await this.enterTextBox(pageObject.yourIncome,"0");
 await this.enterTextBox(pageObject.yourOtherIncome,"0");
 await this.enterTextBox(pageObject.livingExpenses,"1");
 await this.enterTextBox(pageObject.currentHomeLoanRepayments,"0");
 await this.enterTextBox(pageObject.otherLoanRepayments,"0");
 await this.enterTextBox(pageObject.otherCommitments,"0");
 await this.enterTextBox(pageObject.totalCreditCardLimits,"0");
});
