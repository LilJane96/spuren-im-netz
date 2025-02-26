const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    experimentalStudio: true,
  },
  env: {
    SCORM_CLOUD_APP_ID: process.env.REACT_APP_SCORM_CLOUD_APP_ID,
    SCORM_CLOUD_SECRET_KEY: process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY,
  },
});
