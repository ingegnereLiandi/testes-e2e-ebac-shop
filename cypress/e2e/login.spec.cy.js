
/// <reference types= 'cypress'/>

const perfil =require('../fixtures/perfil.json')

context('Funcionalidade login', () => {


    beforeEach(() => {
        cy.visit ('minha-conta')

    });

        afterEach(() => {

            //cy.screenshot()
            
       
        
    });

    it('deve fazer login com sucesso', () => {
        
        cy.get('#username').type ('aluno_teste@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain','Minha conta')
        
    });



    it('Deve fazer login com sucusso -- usando aquivo de dados', () => {

        cy.get('#username').type (perfil.usuario)
        cy.get('#password').type (perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain','Minha conta')
        
    });

    it('Deve fazer login com sucesso -- usando fixtures', () => {
        cy.fixture ('perfil').then(dados => {

        cy.get('#username').type (dados.usuario , {log:false})
        cy.get('#password').type (dados.senha,{log:false} )
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain','Minha conta')
        })


        
    });
    
    it('Deve exibir mensagem de senha ou usuario invalidos' , () => {
      
        cy.get('#username').type ('aluno.teste@teste.com')
        cy.get('#password').type ('teste-teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Verifique novamente')
        
    })

    it('Deve exibir mensagem de senha  invalida' , () => {
       
        cy.get('#username').type ('aluno_teste@teste.com')
        cy.get('#password').type ('teste-teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Erro')
        
    })
})


