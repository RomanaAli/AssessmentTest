/// <reference types ="cypress"/>

import Login from "./PageObject/LoginPage"
import Dashboard from "./PageObject/DashboardPage"

describe("Login Test Suite", function () {

    before(()=>{
        //importing the son file and saving to an alias name
        cy.fixture('loginDetails').as('loginData') 
    })

    it('Login', function(){
        const login = new Login();
        const Dashb = new Dashboard()
        //Using the alias name to this keyword, So we can use globally  
        const lCards = this.loginData
        //looping your .json data with a new variable giftobject
        cy.get(lCards).each((object) => {
            //Write all your business logic test case code here.
            login.navigate();
            login.enterEmail().type(object.email)
            login.enterPassword().type(object.password)
            login.submit();
            cy.url().should('be.equal', 'http://automationpractice.com/index.php?controller=my-account')
            Dashb.Logout();
        })
    })
        
    
    it("Test a failed attempt to login", function () {

        const login = new Login();
        login.navigate();
        login.enterEmail('qasimjaved13@gmail.com');
        login.enterPassword('000000');
        login.submit();
        cy.url().should('be.equal', 'http://automationpractice.com/index.php?controller=authentication')
    })

    
    
})

