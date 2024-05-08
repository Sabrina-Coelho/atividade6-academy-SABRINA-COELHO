import { faker } from '@faker-js/faker';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AtualizarPage from '../pages/atualizar.page';

var paginaAtualizar = new AtualizarPage();

Given('que acessei a tela com a lista de usuários', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
});

When('clico em Ver detalhes de um usuário', function () {
    cy.get('#userDataDetalhe').click();
});

When('clico no botão Editar', function () {
    paginaAtualizar.clickButtonEditar();
});

When('digito um nome válido', function () {
    paginaAtualizar.typeNome(faker.person.fullName().replace('-').replace("'"));
});

When('digito o nome "123456789"', function () {
    paginaAtualizar.typeNome('123456789');
});

When('digito o nome "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"', function () {
    paginaAtualizar.typeNome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
});

When('digito o nome "Aaa"', function () {
    paginaAtualizar.typeNome('Aaa');
});

When('clico no botão Salvar', function () {
    paginaAtualizar.clickButtonSalvar();
});

When('digito um e-mail válido', function () {
    paginaAtualizar.typeEmail(faker.internet.email());
});

When('digito o e-mail "teste@testetesteteste"', function () {
    paginaAtualizar.typeEmail('teste@testetesteteste');
});

When('digito o e-mail "teste.com"', function () {
    paginaAtualizar.typeEmail('teste.com'); 
});

When('digito o e-mail "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaaaaaaaaaaaaaaaa"', function () {
    paginaAtualizar.typeEmail('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaaaaaaaaaaaaaaaa');
});

When('digito o e-mail "a@a"', function () {
    paginaAtualizar.typeEmail('a@a');
});

Then('a mensagem "Informações atualizadas com sucesso!" é exibida', function () {
    cy.contains('#root', 'Informações atualizadas com sucesso!');
});

Then('a mensagem "Formato do nome é inválido." é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Formato do nome é inválido.');
});

Then('a mensagem "Informe no máximo 100 caracteres para o nome" é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Informe no máximo 100 caracteres para o nome');
});

Then('a mensagem "Informe pelo menos 4 letras para o nome." é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Informe pelo menos 4 letras para o nome.');
});

Then('a mensagem "Formato de e-mail inválido" é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Formato de e-mail inválido');
});

Then('a mensagem "Informe no máximo 60 caracteres para o e-mail" é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Informe no máximo 60 caracteres para o e-mail');
});

Then('a mensagem "Informe pelo menos 4 caracteres para o e-mail." é exibida', function () {
    cy.contains('span.sc-cPiKLX.feFrSQ', 'Informe pelo menos 4 caracteres para o e-mail.');
});
