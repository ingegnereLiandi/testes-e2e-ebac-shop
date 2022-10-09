///<reference types = 'cypress' />

import EnderecoPage from '../support/page_objects/endereco-page'
const dadosEndereco = require ('../fixtures/endereco.json')


describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {

beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
    cy.login(dados.usuario, dados.senha)

    })
   
});

    it('Deve fazer cadastro de faturamento com sucesso', () => {
 EnderecoPage.editarEnderecoFaturamento('Roberto', 'Viana', 'Google', 'Brasil' ,'Av Paulista', '866', 'Sao Paulo', 'Sao Paulo','06268-200','11- 3482-2153', 'robertoviana@uol.com')
 cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });

    it.only('Deve fazer cadastro de faturamento com sucesso -usando aruivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email,

            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
               
           });
});