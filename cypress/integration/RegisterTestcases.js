/// <reference types ="cypress"/>

import Register from "./PageObject/SignupPage"

describe("Registration Test Suite", function () {

    it("Create an account into the site", function () {

        const reg = new Register();
        reg.navigate();
        reg.ClickSignin();
        reg.enterEmail('testromana2@gmail.com');
        reg.Verifyemail();
        reg.selectgender();
        reg.enterFirstName('Testtwo');
        reg.enterLastName('Usertwo');
        reg.enterPassword('12345');
        reg.enterAddress('Tester lives in 10 pearl')
        reg.enterCity('Lahore');
        reg.selectState('California');
        reg.enterZIPcode('90011');
        reg.selectCountry('United States');
        reg.enterphonenumber('00923876234567');
        reg.enteralias('Test Test Alias');
        reg.submit();
        cy.url().should('be.equal', 'http://automationpractice.com/index.php?controller=my-account')
    })

    it("Test the required fields", function () {

        const reg = new Register();
        reg.navigate();
        reg.ClickSignin();
        reg.enterEmail('test12q123w@gmail.com');
        reg.Verifyemail();
        reg.clearEmail();
        reg.clearCountry('');
        reg.clearAlias();
        reg.submit();
        cy.url().should('be.equal', 'http://automationpractice.com/index.php?controller=authentication')
    })
})

