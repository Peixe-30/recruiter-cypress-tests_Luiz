///<reference types ='cypress' />

var el = require('../Elements/login_elements').LOGIN
const {
    set, click, get_text
} = require('../actions')

// import { el } from "@faker-js/faker";

class Login {

    visitarSite() {
        cy.visit(el.url_login)

    }

    preencherLogin(email, senha) {
        if (email !== null) {
            set(el.campoEmail, email)
        }
        if (senha !== null) {
            set(el.campoSenha, senha)
        }
    }

    clickButtonAce_conta() {

        click(el.buttonAce_conta)
        // cy.get('button[type=submit]')
        //     .contains('Acessar minha conta').click()
    }

    //Campo email invalido e email em bracno
    validaMensagem() {
        return get_text(el.validaMensagem)
    }

    invalido(message) {
        return get_text(el.invalido)
    }

    //Campo senha inválido
    ValidaMessage2(message) {
        cy.get('#mui-2-helper-text')
            .should('have.text', message)
    }

    //Login com sucesso
    ValidaMessage3(message) {
        cy.get('.mui-style-k2m8sx > h3')
            .should('have.text', message)
    }
}
export default new Login()