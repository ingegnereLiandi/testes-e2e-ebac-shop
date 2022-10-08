/// <reference types= 'cypress'/>

import EnderecoPage from '../support/page-objects/endereco-page'

import DadosEndereco from '../fixtures/endereco.json'

describe('Funcionalidade Enderecos- Futuramento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then (dados =>
        cy.login(dados.usuario, dados.senha))
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {

        EnderecoPage.editarEnderecoFaturamento('Douglas', 'Liandi', 'LiandiTech','Brasil', 'Av. Sao Joao', '2001', 'Sao Paulo', '06268-050', '11.94942-2153', 'douglasliandi@outlook.it')
        cy.get('.woocommerce-message').should('contain', 'alterado com sucesso')
    });
        
    it.only('Deve fazer cadastro de faturamento com sucesso- Usando arquivo de dados', () => {

        EnderecoPage.editarEnderecoFaturamento(
            DadosEndereco[0].nome,
            DadosEndereco[0].sobrenome,
            DadosEndereco[0].empresa,
            DadosEndereco[0].pais,
            DadosEndereco[0].endereco,
            DadosEndereco[0].numero,
            DadosEndereco[0].cidade,
            DadosEndereco[0].estado,
            DadosEndereco[0].cep,
            DadosEndereco[0].telefone,
            DadosEndereco[0].email)
        cy.get('.woocommerce-message').should('contain', 'alterado com sucesso')
    });
        
    });