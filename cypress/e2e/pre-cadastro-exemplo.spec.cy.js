/// <reference types= 'cypress' />

describe('Funcionalidade pre-cadastro', () => {
    let faker= require ('faker')
    
   
   

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        //cy.screenshot()
    });


    it('Deve completar o pre-cadastro com sucesso', () => {

       
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker, sobrenomeFaker)


        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        
    });

    
});