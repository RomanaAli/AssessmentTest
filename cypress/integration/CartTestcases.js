/// <reference types ="cypress"/>

import Login from "./PageObject/LoginPage"
import Dashboard from "./PageObject/DashboardPage"

describe("Cart testcases suite", function () {

    it("Add product into cart", function () {

        const login = new Login();
        const dash = new Dashboard();
        login.navigate();
        login.enterEmail('qasimjaved13@gmail.com');
        login.enterPassword('12345');
        login.submit();

        dash.selectMainCategory();
        dash.selectSubCategory();
        dash.addtocart();
        dash.proceedtoCheckout();

        cy.get('.cart_description > .product-name > a')
        .invoke('text').then((text1) =>{
            expect(text1).to.eq('Printed Dress')

        })

    })

    it("Edit product quantity in the cart", function () {

        const login = new Login();
        const dash = new Dashboard();
        login.navigate();
        login.enterEmail('qasimjaved13@gmail.com');
        login.enterPassword('12345');
        login.submit();

        dash.selectMainCategory();
        dash.selectSubCategory();
        dash.addtocart();
        dash.proceedtoCheckout();
        dash.editcart();
    })


    it("Delete product from cart", function () {

        const login = new Login();
        const dash = new Dashboard();
        login.navigate();
        login.enterEmail('qasimjaved13@gmail.com');
        login.enterPassword('12345');
        login.submit();

        dash.selectMainCategory();
        dash.selectSubCategory();
        dash.addtocart();
        dash.proceedtoCheckout();
        dash.deleteproductfromCart();
    })

})