import { faker } from '@faker-js/faker';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CadastroPage from '../pages/cadastro.page';

const paginaCadastro = new CadastroPage();
var email = '';
var nome = '';

Given('que acessei a funcionalidade de cadastro', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
    cy.get('[href="/users/novo"]').click();
});

When('informo um nome válido', function () {
    nome = faker.person.fullName().replace('-').replace("'");
    paginaCadastro.typeNome(nome);
});

When('informo um e-mail válido', function () {
    email = faker.internet.email();
    paginaCadastro.typeEmail(email);
});

When('clico no botão Salvar', function () {
    paginaCadastro.clickButtonSalvar();
});

When('não preencho o campo nome', function () {
    cy.get('#name').click();
});

When('não preencho o campo e-mail', function () {
    cy.get('#email').click();
});

When('informo o e-mail "teste.com"', function () {
    paginaCadastro.typeEmail('teste.com');
});

When('informo o e-mail "teste@testetesteteste"', function () {
    paginaCadastro.typeEmail('teste@testetesteteste');
});

When('informo o e-mail "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaaaaaaaaaaaaaaaa"', function () {
    paginaCadastro.typeEmail('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaaaaaaaaaaaaaaaa');
});

When('informo o e-mail "a@a"', function () {
    paginaCadastro.typeEmail('a@a');
});

When('informo o nome "123456789"', function () {
    paginaCadastro.typeNome('123456789');
});

When('informo o nome "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"', function () {
    paginaCadastro.typeNome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
});

When('informo o nome "Aaa"', function () {
    paginaCadastro.typeNome('Aaa');
});

Then('a mensagem "Informe pelo menos 4 letras para o nome" é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Informe pelo menos 4 letras para o nome');
})

Then('a mensagem "Informe no máximo 100 caracteres para o nome" é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Informe no máximo 100 caracteres para o nome');
});

Then('a mensagem "Formato do nome é inválido." é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Formato do nome é inválido.');
});

Then('a mensagem "Informe pelo menos 4 caracteres para o e-mail" é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Informe pelo menos 4 caracteres para o e-mail');
});

Then('a mensagem "Informe no máximo 60 caracteres para o e-mail" é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Informe no máximo 60 caracteres para o e-mail');
});

Then('a mensagem "Formato de e-mail inválido" é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Formato de e-mail inválido');
});

Then('a mensagem "O campo e-mail é obrigatório." é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'O campo e-mail é obrigatório.');
});

Then('a mensagem "O campo nome é obrigatório." é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'O campo nome é obrigatório.');
});

Then('a mensagem "Usuário salvo com sucesso!" é exibida', function () {
    cy.contains('#root', 'Usuário salvo com sucesso!');
});