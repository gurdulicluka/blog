import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: "cypress/e2e/support/index.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:3000",
    video: false,
    screenshotOnRunFailure: false,
    watchForFileChanges: false,
    runMode: "single",
  },
  env: {
    email: "phallondev@gmail.com",
  },
});
