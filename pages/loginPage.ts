import { Page } from "@playwright/test";

export default class LoginPage{

    constructor(public page: Page) {}

    async enterEmail(emailaddress: string) {
        await this.page.locator("input[name='email']")
        .fill(emailaddress);
    }

    async enterPassword(password: string) {
        await this.page.locator("input[name='password']")
           .fill(password);
    }  
   
    async clickLoginBtn() {
        await this.page.click("input [value='Login']");
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }
}
