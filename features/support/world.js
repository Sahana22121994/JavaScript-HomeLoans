const { setWorldConstructor } = require("cucumber");
const puppeteer = require("puppeteer");
const assert = require("assert");

const PAGE = "https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/";

class TodoWorld {
  constructor() {
    this.todo = "";
  }

  async attachScreenshot(string){
    await this.page.screenshot({path:`./features/support/img/${string}.png`});
  }
  
async clickElement(selector){
  await this.page.click(selector);
}

async enterTextBox(selector,value){
await this.page.focus(selector);
await this.page.click(selector);
await this.page.keyboard.type(value);
}

async checkElementValue(selector,value){
  await this.page.waitForSelector(selector);
  await this.page.waitFor(10000);
  const inputvalue = await this.page.$eval(selector,el => el.innerText);
  // inputvalue = inputvalue.split("$");
  // inputvalue = inputvalue.replace(",","");
  assert.equal(inputvalue.trim(),value);
}

async checkElementExist(selector){
await this.page.waitForSelector(selector);
}   
  async closeTodoPage() {
    await this.browser.close();
  }
  async loginToApplication() {
    this.browser = await puppeteer.launch({headless :false,args:["--start-fullscreen"]});
    this.page = await this.browser.newPage();    
    await this.page.setViewport({width:1366,height:768});
    await this.page.goto(PAGE);   
    await this.page.waitFor(4000);
      }
}

setWorldConstructor(TodoWorld);
