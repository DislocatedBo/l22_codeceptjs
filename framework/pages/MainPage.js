const { I } = inject();

module.exports = {
  // локаторы

  hamburgerButton: "#react-burger-menu-btn",
  hamburgerAboutButton: "#about_sidebar_link",
  hamburgerCloseButton: "#react-burger-cross-btn",
  clickFilter: "select[data-test*='sort']",

  // методы
  visit () {
    I.amOnPage('https://www.saucedemo.com/inventory.html')
    I.see('Products')
  },

  openHamburger () {
    I.click(this.hamburgerButton)
  },

  closeHamburger () {
    I.click(this.hamburgerCloseButton)
  },

  openFilter () {
    I.click(this.clickFilter)
  },

  async getHamburgerItems() {
    return (await I.grabTextFromAll('nav'))[0].split("\n")
  },

  async getFilterItems() {
    return (await I.grabTextFromAll(this.clickFilter))[0].split("\n")
  }
}