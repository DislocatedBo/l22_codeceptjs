/// <reference types='codeceptjs' />
const config = require("../framework/config/config.js");
const { expect } = require("chai");

Feature("Проверка списков");

Before(({ loginPage }) => {
  loginPage.visit();
  loginPage.login(config.credentials.user);
});

Scenario("Гамбургер-меню содержит список подразделов", async ({ I, mainPage }) => {
  const hamburgerValues = await mainPage.getHamburgerItems();
  expect(["All Items", "About", "Logout", "Reset App State"]).eql(
    hamburgerValues
  );
});

Scenario("Корректно отображается список фильтров", async ({ I, mainPage }) => {
  mainPage.openFilter();
  const filterValues = await mainPage.getFilterItems();
  expect([
    "Name (A to Z)",
    "Name (Z to A)",
    "Price (low to high)",
    "Price (high to low)",
  ]).eql(filterValues);
});

Scenario("Гамбургер-меню корректно закрывается по кнопке Х", async ({ I, mainPage }) => {
  mainPage.openHamburger();
  mainPage.closeHamburger();
  I.dontSee(mainPage.hamburgerAboutButton);
});
