class Register{

    navigate() {
        cy.visit('http://automationpractice.com/index.php')
    }

    ClickSignin() {
        cy.get('.login').click()
    }

    enterEmail(email) {
        cy.get('#email_create').type('test12qasd@gmail.com')
            .clear()
            .type(email);
        return this
    }

    Verifyemail() {
        cy.get('#SubmitCreate > span').click()
    }

    selectgender() {
        cy.get('#id_gender1').click()
    }

    enterFirstName(Fname) {
        cy.get('#customer_firstname')
            .clear()
            .type(Fname);
        return this
    }

    enterLastName(Lname) {
        cy.get('#customer_lastname')
            .clear()
            .type(Lname)
        return this
    }

    enterPassword(password) {
        cy.get('#passwd')
            .clear()
            .type(password)
        return this
    }

    enterAddress(address) {
        cy.get('#address1')
            .clear()
            .type(address)
        return this
    }

    enterCity(city) {
        cy.get('#city')
            .clear()
            .type(city)
        return this
    }

    selectState(state) {
        cy.get('#id_state')
            .select(state)
        return this
    }

    enterZIPcode(zipcode) {
        cy.get('#postcode')
            .clear()
            .type(zipcode)
        return this
    }

    selectCountry(country) {
        cy.get('#id_country')
            .select(country)
        return this
    }

    enterphonenumber(phoneno) {
        cy.get('#phone_mobile')
            .clear()
            .type(phoneno)
        return this
    }

    enteralias(alias) {
        cy.get('#alias')
            .clear()
            .type(alias)
        return this
    }

    submit() {
        cy.get('#submitAccount > span').click()
    }

    clearEmail() {
        cy.get('#email')
            .clear()
        return this
    }


    clearCountry(ccountry) {
        cy.get('#id_country')
            .select(ccountry)
        return this
    }

    clearAlias() {
        cy.get('#alias')
            .clear()
        return this
    }

}
export default Register