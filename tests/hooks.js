import { Before, After } from '@cucumber/cucumber';
import pageFactory from '../factory/pageFactory.js';



Before(async function () {
  console.log('Before each scenario');
});


After(async function (scenario) {
  const userType = this.userType;
  if (userType) {
    console.log(`Closing page and browser for user: ${userType}`);
    await pageFactory.closePage(userType);
  } else {
    console.log("No user type specified, skipping page/browser closure.");
  }
});
