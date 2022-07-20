class Login{

    navigate() {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
    }

    enterEmail() {
        return cy.get('#email')
         
    }

    enterPassword() {
        return cy.get('#passwd')
    }

    submit() {
        cy.get('#SubmitLogin > span').click()
    }

}
export default Login