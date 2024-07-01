const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "49dmae",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
});
