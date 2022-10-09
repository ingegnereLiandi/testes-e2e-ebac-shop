class CompraProdutoPage {
        incluirCompra2() {


cy.get('[class="product-block grid"]').contains('Mach Street Sweatshirt').click()
cy.get('.button-variable-item-M').click()
cy.get('.button-variable-item-Red').click()
cy.get('.input-text').clear().type('1').click()
cy.get('.single_add_to_cart_button').click()


}

incluirCompra3(){

cy.get('.post-2543 > .product-block').click()
cy.get('.button-variable-item-M').click()
cy.get('.button-variable-item-Brown').click()
cy.get('.input-text').clear().type('1').click()
cy.get('.single_add_to_cart_button').click()



}

incluirCompra4(){

        cy.get('.post-2648 > .product-block').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('1').click()
        cy.get('.single_add_to_cart_button').click()
        
        
        
        }

}
export default new CompraProdutoPage()