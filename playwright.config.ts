import type { PlaywrightTestConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 60000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    browserName: "chromium",
    actionTimeout: 15000,
    navigationTimeout: 20000,
    screenshot: "only-on-failure",
    video: {
        mode: "retain-on-failure",
        size: { width: 800, height: 640 },
    },
    acceptDownloads: true,
    trace: "retain-on-failure",
},
  /* Run tests in files in parallel */

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 8,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
};

export default config;
