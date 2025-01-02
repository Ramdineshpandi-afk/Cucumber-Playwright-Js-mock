import { Given, Then, When } from "@cucumber/cucumber";
import testDataService from "../../services/testDataService.js";
import pageFactory from "../../factory/pageFactory.js";


Given('I am on sauce demo login page as {string}', async function (userType) {
    const page = await pageFactory.getPage(userType, 'login');
    await page.goToLoginPage();
});

When('I login as {string}', async function (userType) {
    const loginCredentials = testDataService.getUserData(userType);
    const page = await pageFactory.getPage(userType, 'login');
    if (loginCredentials) {
        await page.fillUserName(loginCredentials.userName);
        await page.fillPassword(loginCredentials.password);
        await page.clickLogin();
    } else {
        console.error("User credentials not found for", userType);
    }
});

// Then('I should be able to login successfully as ${string}', async function (userType) {
//     const page = await pageFactory.getPage(userType, 'login');
//     const loginStatus = await page.checkLoginStatus();
//     if (!loginStatus) {
//         throw new Error(`Login failed for ${userType}`);
//     }
// });

// Then('I should see error message as ${string}', async function (userType) {
//     const page = await pageFactory.getPage(userType, 'login');
//     const errorMessage = await page.getErrorMessage();
//     if (!errorMessage) {
//         throw new Error(`Error message not displayed for ${userType}`);
//     }
// });

