exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    loginPage: './framework/pages/LoginPage.js',
    mainPage: "./framework/pages/MainPage.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: 5000,
  teardown: null,
  hooks: [],
  gherkin: {
    steps: []
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 1000,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  name: 'cypress-to-codeceptjs'
}