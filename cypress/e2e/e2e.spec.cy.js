///<reference types ="cypress"/>

const perfil = require('../fixtures/perfil.json')




context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.visit('minha-conta')
    });

    beforeEach(() => {
        //cy.screenshot()
    });

    afterEach(() => {

       // cy.screenshot()
        
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */


 //TODO 
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false })
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()

            cy.get('#primary-menu > .menu-item-629 > a').click()  

            cy.addProduto1('Ajax Full-Zip Sweatshirt', 'M', 'Green', 1) 
            cy.addProduto2('Mach Street Sweatshirt', 'M', 'Red', 1)
            cy.addProduto3( 'Oslo Trek Hoodie', 'M', 'Brown', 1)
            cy.addProduto4( 'Marco Lightweight Active Hoodie', 'M', 'Green',1)
           
            cy.get('.woocommerce-message > .button').click()
            cy.get('.checkout-button').click()
            cy.get('#payment_method_cheque').click()
            cy.get('#terms').click({ force: true })
            cy.get('#place_order').click({ force: true })

            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

           
        });
    });
});

