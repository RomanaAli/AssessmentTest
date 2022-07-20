class Dashboard{

    selectMainCategory(){
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()

    }


    selectSubCategory(){
        cy.get(':nth-child(1) > .subcategory-image > .img > .replace-2x').click()
    }

    addtocart(){
        cy.get('.ajax_add_to_cart_button > span').click()

    }

    proceedtoCheckout(){
        cy.get('.button-container > .button-medium > span').click()
    }
    
    deleteproductfromCart(){
        cy.get('.icon-trash').click()
    }

    editcart(){
        cy.get('.icon-plus').click()
    }

    Logout(){
        cy.get('.logout').click()

    }

    

}
export default Dashboard