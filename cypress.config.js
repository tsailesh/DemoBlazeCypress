const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com/",
    pageLoadTimeout: 100000,
    defaultCommandTimeout:40000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
