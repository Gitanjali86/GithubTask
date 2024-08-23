const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log("VALID_TOKEN:", process.env.VALID_TOKEN);
      console.log("INVALID_TOKEN:", process.env.INVALID_TOKEN);
      console.log("FORBIDDEN_TOKEN:", process.env.FORBIDDEN_TOKEN);
      // Set up environment variables from GitHub Actions secrets
      config.env = {
        VALID_TOKEN: process.env.VALID_TOKEN,
        INVALID_TOKEN: process.env.INVALID_TOKEN,
        FORBIDDEN_TOKEN: process.env.FORBIDDEN_TOKEN,
      };
      return config;
    },
    specPattern: "cypress/e2e/**/*.js",
  },
});
