const { test, expect, request } = require("@playwright/test");
require("dotenv").config();

const homePage = "https://www.doximity.com/";

test("Verify homepage through API", async ({ playwright }) => {
  // Create a new API request context and send GET
  const apiRequest = await playwright.request.newContext();
  const response = await apiRequest.get(`${homePage}`);

  // Verify that we are on the right page and the response status is 200
  expect(response.url()).toBe(`${homePage}`);
  expect(response.status()).toBe(200);

  console.log("Home page verified. ✅");
});

test("Doximity Login Test", async ({ page }) => {
  // Navigate to the Doximity login page
  await page.goto(`${homePage}`);

  // There are multiple "Sign In" elements on the page.
  // This is how I created the unique locator without id
  const signInLink = page.locator("a.underline", { hasText: "Sign In" });
  signInLink.click();

  // Locators for email, password, remember me and sign in using their ids.
  const email = page.locator("#login");
  const password = page.locator("#password");
  const signInBtn = page.locator("#signinbutton");
  const sharedComp = page.locator("#remember_me");

  // Fill in login credentials using .env variables
  await email.fill(process.env.EMAIL);
  await password.fill(process.env.PASSWORD);

  await sharedComp.click(); // Optional for this test.
  await signInBtn.click();

  // Wait for the Newsfeed page to load after login
  await page.waitForURL("https://www.doximity.com/newsfeed", {
    timeout: 5000,
  });

  // Verify user is on the Newsfeed page
  expect(page.url()).toBe("https://www.doximity.com/newsfeed");
  await expect(page.locator("text=Newsfeed")).toBeVisible();

  console.log("Login test passed! ✅");

  // TODO: Add a new step if the browser asked for verification code.

  //page.pause();
});
