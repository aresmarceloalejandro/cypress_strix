import { defineConfig } from "cypress";
import mochaawesome from 'cypress-mochawesome-reporter/plugin.js'
import { config as loadEnv } from "dotenv";
loadEnv();

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Cypress Strix Automation",
    embeddedScreenshots: true,
  },
  env: {
    user_name: process.env.STRIX_USERNAME,
    password: process.env.STRIX_PASSWORD,
  },
  e2e: {
    specPattern: "cypress/e2e/*.cy.{ts,tsx}",
    baseUrl: "https://clientes.test.aws.consumer.strix.com.ar/",
    setupNodeEvents(on, config) {
      mochaawesome(on, config);
      return config;
    },
  },
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: true,
  video: true
});
