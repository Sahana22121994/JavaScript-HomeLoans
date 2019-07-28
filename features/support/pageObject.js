const puppeteer=require("puppeteer");

const startOver = "body > main > div:nth-child(2) > div > div > div.clearfix > div > div > div > div > div.container.container--four.box--white > div > div:nth-child(3) > div > div > div > div.borrow__result.text--white.clearfix > div.box--right > button"
const applicationType="body > main > div:nth-child(2) > div > div > div.clearfix > div > div > div > div > div.container.container--four.box--white > div > div.container__main.borrow--homeloan > div > div:nth-child(1) > div > div:nth-child(2) > ul > li.selected > label"
const numberOfDependants="body > main > div:nth-child(2) > div > div > div.clearfix > div > div > div > div > div.container.container--four.box--white > div > div.container__main.borrow--homeloan > div > div:nth-child(1) > div > div:nth-child(3) > div > select > option:nth-child(1)"
const propertyYouWouldLikeToBuy="body > main > div:nth-child(2) > div > div > div.clearfix > div > div > div > div > div.container.container--four.box--white > div > div.container__main.borrow--homeloan > div > div:nth-child(1) > div > div.borrow__question.borrow__question--tall > ul > li.selected > label"
const yourIncome ="body > main > div:nth-child(2) > div > div > div.clearfix > div > div > div > div > div.container.container--four.box--white > div > div.container__main.borrow--homeloan > div > div:nth-child(2) > div > div:nth-child(2) > div > input[type=text]"
const yourOtherIncome="body > main > div:nth-child(2) > div > div > div.clearfix > div > div > div > div > div.container.container--four.box--white > div > div.container__main.borrow--homeloan > div > div:nth-child(2) > div > div:nth-child(3) > div > input[type=text]"
const livingExpenses ="#expenses"
const currentHomeLoanRepayments="#homeloans"
const otherLoanRepayments ="#otherloans"
const otherCommitments ="body > main > div:nth-child(2) > div > div > div.clearfix > div > div > div > div > div.container.container--four.box--white > div > div.container__main.borrow--homeloan > div > div:nth-child(3) > div > div:nth-child(5) > div > input[type=text]"
const totalCreditCardLimits="#credit"
const workOutHowMuchICouldBorrow="body > main > div:nth-child(2) > div > div > div.clearfix > div > div > div > div > div.container.container--four.box--white > div > div:nth-child(3) > div > div > div > div.borrow__calculate.text--center.clearfix > button"
const amt="body > main > div:nth-child(2) > div > div > div.clearfix > div > div > div > div > div.container.container--four.box--white > div > div:nth-child(3) > div > div > div > div.borrow__result.text--white.clearfix > div.box--left > span.borrow__result__text > span"
const message="body > main > div:nth-child(2) > div > div > div.clearfix > div > div > div > div > div.container.container--four.box--white > div > div:nth-child(3) > div > div > div > div.borrow__error.text--white.clearfix > div.box--left.text--center > span"

module.exports={message,startOver,applicationType,numberOfDependants,propertyYouWouldLikeToBuy,yourIncome,yourOtherIncome,
    livingExpenses,currentHomeLoanRepayments,otherLoanRepayments,otherCommitments,totalCreditCardLimits,workOutHowMuchICouldBorrow,amt}