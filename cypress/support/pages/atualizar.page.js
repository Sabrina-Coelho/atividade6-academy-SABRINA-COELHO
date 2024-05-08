export default class AtualizarPage {
    inputNome = '#userName';
    inputEmail = '#userEmail';
    buttonEditar = 'button[type="button"]'
    buttonSalvar = 'button[type="submit"]';

    typeNome(nome) {
        cy.get(this.inputNome).clear();
        cy.get(this.inputNome).type(nome);
    }

    typeEmail(email) {
        cy.get(this.inputEmail).clear();
        cy.get(this.inputEmail).type(email);
    }

    clickButtonEditar() {
        cy.get(this.buttonEditar).click(); 
    }

    clickButtonSalvar() {
        cy.get(this.buttonSalvar).click(); 
    }
}