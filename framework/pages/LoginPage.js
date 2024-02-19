const { I } = inject();

module.exports = {
  // локаторы
  fields: {
    username: "input[data-test='username']",
    password: "input[data-test='password']"
  },
  submitButton: "input[data-test='login-button']",
  errors: {
    username: "h3[data-test='error']",
    password: "h3[data-test='error']"
  },

  // методы
  visit () {
    I.amOnPage('https://www.saucedemo.com/')
    I.see('Accepted usernames are')
  },

  fillUsername (username) {
    I.fillField(this.fields.username, username)
  },
  fillPassword (password) {
    I.fillField(this.fields.password, password)
  },
  submitForm () {
    I.click(this.submitButton)
  },
  async getPasswordError () {
    return await I.grabTextFrom(this.errors.password)
  },
  login ({ username, password }) {
    this.visit()
    this.fillUsername(username)
    this.fillPassword(password)
    this.submitForm()
  }
}