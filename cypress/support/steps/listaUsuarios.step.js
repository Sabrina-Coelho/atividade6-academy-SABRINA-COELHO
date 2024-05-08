import { faker } from '@faker-js/faker';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CadastroPage from '../pages/cadastro.page';

var paginaCadastro = new CadastroPage();

Given('que não há nenhum usuário cadastrado', function () {
    cy.intercept('GET', 'api/v1/users', {
        statusCode: 200,
        body: []
      }).as('userList');
});

Given('que há pelo menos um usuário cadastrado', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cy.get('[href="/users/novo"]').click();
    nome = faker.person.fullName().replace('-').replace("'");
    paginaCadastro.typeNome(nome);
    email = faker.internet.email();
    paginaCadastro.typeEmail(email);
    paginaCadastro.clickButtonSalvar();
});

When('acesso a lista de usuários', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
});

Then('as mensagens "Ops! Não existe nenhum usuário para ser exibido." e "Cadastre um novo usuário" são exibidas', function () {
    cy.wait('@userList');
    cy.contains('div.sc-koXPp.csBRDe', 'Ops! Não existe nenhum usuário para ser exibido.');
    cy.contains('div.sc-koXPp.csBRDe', 'Cadastre um novo usuário');
});

Then('visualizo todos os usuários cadastrados', function () {
    cy.get('#listaUsuarios').should('be.visible');
    cy.contains('#userData', 'Nome:');
    cy.contains('#userData', 'E-mail:');
    cy.get('#paginacaoAtual').should('be.visible');
});