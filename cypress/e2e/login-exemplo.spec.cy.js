/// <reference types= 'cypress' />

const perfil = require('../fixtures/perfil.json')



context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        //cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {


        cy.get('#username').type('douglasliandi@hotmail.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, douglasliandi')



    });

    it('Deve fazer login com sucesso-- usando arquivo de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    });


    it.only('Deve fazer login com sucesso --usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario , {log:false})
            cy.get('#password').type(dados.senha, { log: false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')


        })


    });



    it('Deve exibir mensagem de usuario invalido', () => {

        cy.get('#username').type('douglasliandi@hotmail.br')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')

    });

    it('Deve exibir mensagem de senha invalida', () => {

        cy.get('#username').type('douglasliandi@hotmail.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail douglasliandi@hotmail.com está incorreta')

    });

});