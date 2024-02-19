/// <reference types='codeceptjs' />
const config = require("../framework/config/config.js");
const { expect } = require("chai");

Feature("Авторизация");

Before(({ loginPage }) => {
  loginPage.visit();
});

Scenario("Успешная", async ({ I, loginPage }) => {
  loginPage.login(config.credentials.user);
  I.seeCurrentUrlEquals("/inventory.html");
});

Scenario("Нельзя авторизоваться без пароля", async ({ I, loginPage }) => {
  loginPage.login({
    username: config.credentials.user.username,
    password: "",
  });
  expect(await loginPage.getPasswordError()).to.be.equal(
    "Epic sadface: Password is required"
  );
});
