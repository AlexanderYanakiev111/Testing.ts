import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialHotPage from "../pages/specialHotPage";

const firstName = "Alex";
const lastName = "Yanakiev";
const email = "agyanakiev.workspace@gmail.com";
const telephone = "0878589043";
const password = "Alex@123";

test.describe("Page Object test", async () => {
test("Register test_01", async ({page, baseURL}) => {
    
    const register = new RegisterPage(page);
    await page.goto(baseURL);
    await register.enterFirstName(firstName);
    await register.enterLastName(lastName);
    await register.enterEmail(email);
    await register.enterTelephone(telephone);
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);
    expect(register.isSubscribeChecked()).toBeChecked();
    await register.clickTermandCondition();
    await register.clickContinueToRegister();

})

test("Login test_02", async ({page, baseURL}) => {

    const login = new LoginPage(page);
    await page.goto(baseURL);
    await login.enterEmail(email);
    await login.enterPassword(password);
    await login.clickLoginBtn();
    expect(await page.title()).toBe("My Account");
    
})

test("Add to cart test_03", async ({page, baseURL}) => {

    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const special = new SpecialHotPage(page);
    await page.goto(baseURL);
    await login.login(email, password);
    await homePage.clickOnSpecialHotMenu();
    await special.addFirstProductToTheCart();
    const isCartVisible = await special.isToastVisible();
    expect(isCartVisible).toBeVisible();
    
})
})