import { faker } from '@faker-js/faker';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CadastroPage from '../pages/cadastro.page';
import PesquisaPage from '../pages/pesquisa.page';

var paginaCadastro = new CadastroPage();
var paginaPesquisa = new PesquisaPage();
var email = '';
var nome = '';


Given('que há pelo menos um usuário cadastrado', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cy.get('[href="/users/novo"]').click();
    nome = faker.person.fullName().replace('-').replace("'");
    paginaCadastro.typeNome(nome);
    email = faker.internet.email();
    paginaCadastro.typeEmail(email);
    paginaCadastro.clickButtonSalvar();
});

Given('que acessei a tela com a lista de usuários', function () {
    cy.wait(2000);
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
});

When('clico na barra de pesquisa e digito o e-mail cadastrado', function () {
    paginaPesquisa.typeEmail(email);
});

When('clico na barra de pesquisa e digito o nome cadastrado', function () {
    paginaPesquisa.typeNome(nome);
});

When('clico na barra de pesquisa e digito o nome "123456789"', function () {
    paginaPesquisa.typeNome('123456789');
});

When('clico na barra de pesquisa e digito o e-mail "teste@teste"', function () {
    paginaPesquisa.typeEmail('teste@teste');
});

When('clico na barra de pesquisa e digito o e-mail "testeteste.br"', function () {
    paginaPesquisa.typeEmail('testeteste.br');
});

Then('as mensagens "Ops! Não existe nenhum usuário para ser exibido." e "Cadastre um novo usuário" são exibidas', function () {
    cy.contains('div.sc-koXPp.csBRDe', 'Ops! Não existe nenhum usuário para ser exibido.');
    cy.contains('div.sc-koXPp.csBRDe', 'Cadastre um novo usuário');
});

Then('sou direcionado para a tela com os usuários com o e-mail correspondente', function () {
    cy.contains('#userData', 'E-mail: ');
});

Then('sou direcionado para a tela com os usuários com o nome correspondente', function () {
    cy.contains('#userData', 'Nome: ' + nome);
});
