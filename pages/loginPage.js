
class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginbutton = '#login-button';
        this.errorMessageSelector = '.error-message-container';
        this.profileIconSelector = '.profile-icon';
    }

    async goToLoginPage() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async fillUserName(username) {
        await this.page.locator(this.username).fill(username)
    }

    async fillPassword(password) {
        await this.page.locator(this.password).fill(password)
    }

    async clickLogin() {
        await this.page.locator(this.loginbutton).click();
    }


    async checkLoginStatus() {
        try {
            const profileIcon = await this.page.locator(this.profileIconSelector);
            const isProfileIconVisible = await profileIcon.isVisible();
            return isProfileIconVisible;
        } catch (error) {
            console.error('Error checking login status:', error);
            return false;
        }
    }
    async assertErrorMessageIsDisplayed() {
        const errorMessageElement = await this.page.locator(this.errorMessageSelector);
        await expect(errorMessageElement).toBeVisible();
    }

}
export default LoginPage;