///<reference types= 'cypress'/>

describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto', () => {

        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            .eq(3)
            .contains('Ajax Full-Zip Sweatshirt').click()

    });

    it('Deve adicionar um item ao carrinho', () => {

        var quantidade= 9

        cy.get('[class="product-block grid"]')
        .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain' ,  quantidade )



    });

    it('Deve adicionar produtos ao carrinho- usando comando customizado', () => {
        cy.addProduto('Ajax Full-Zip Sweatshirt', 'M' , 'Green', 3)
        cy.get('.woocommerce-message').should('contain' ,  '“Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
        
    });

});