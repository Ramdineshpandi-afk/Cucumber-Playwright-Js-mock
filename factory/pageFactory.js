import LoginPage from "../pages/loginPage.js";
import { chromium } from '@playwright/test'

class PageFactory {
    constructor() {
        this.pages = {}
    }
    async createPage(userType) {
        if (!this.pages[userType]) {
            console.log(`creating new page for ${userType}`);
            const browser = await chromium.launch({ headless: false });
            const context = await browser.newContext();
            const page = await context.newPage();
            this.pages[userType] = { page, browser };
        }
        return this.pages[userType].page;
    }
    async getPage(userType, pageName) {
        const page = await this.createPage(userType);
        switch (pageName) {
            case 'login':
                return new LoginPage(page);
            default:
                throw new Error(`give valid page, the given page is:${pageName}`);
        }
    }

    async closePage(userType) {
        if (this.pages[userType]) {
            console.log(`Closing page and browser for ${userType}`);
            await this.pages[userType].browser.close();
            delete this.pages[userType];
        }
    }
}

export default new PageFactory;