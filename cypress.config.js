import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:3000",
    video: false,
    screenshotOnRunFailure: false,
  },
  env: {
    email: "phallondev@gmail.com",
  },
});
