import { test, expect, chromium } from '@playwright/test';

test.describe("Testing10", async () => {
  test.beforeAll(async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://playwright.dev/')
    await page.waitForTimeout(3000)
    await browser.close()
  })

  test('has title1', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  })

  test('has title2', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  })

  test('has title3', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  })
})
