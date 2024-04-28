const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://studio.moises.ai',
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2,
      openMode: 2
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
    },
  },
});
