///<reference types= 'cypress'/>

describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto', () => {

        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            .eq(3)
            .contains('Ajax Full-Zip Sweatshirt').click()

    });

    it.only('Deve adicionar um item ao carrinho', () => {

        var quantidade= 9

        cy.get('[class="product-block grid"]')
        .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain' ,  quantidade )



    });

});