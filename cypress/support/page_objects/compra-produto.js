class CompraProdutoPage {
    incluirCompra() {



        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(8) > .page-numbers').click()



 cy.get('.post-2913 > .product-block').click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Gray').click()
        cy.get('.input-text').clear().type('1').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(3) > a').click()

cy.get('.post-3528 > .product-block').click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type('1').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(3) > a').click()


cy.get('.post-3647 > .product-block').click()
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type('1').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(3) > a').click()



cy.get('.post-3345 > .product-block').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type('1').click()
        cy.get('.single_add_to_cart_button').click()

        
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#payment_method_cheque').click()

        cy.get('#terms').click({ force: true })
        cy.get('#place_order').click({ force: true })

        




    }


}
export default new CompraProdutoPage()