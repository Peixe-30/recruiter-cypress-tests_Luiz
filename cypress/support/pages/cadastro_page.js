///<reference types ='cypress' />
var el = require('../Elements/cadastro_elements').CADASTRO
const {
    set, click, click_index, get_text
} = require('../actions')


class Cadastro {

    visitarSite() {
        cy.visit(el.url)

    }
    preencherCadastro1(nome, sobrenome, email, celular) {
        if (nome !== null) {
            set(el.campoNome, nome)
        }
        if (sobrenome !== null) {
            set(el.campoSobrenopme, sobrenome);
        }
        if (email !== null) {
            set(el.campoEmail, email);
        }
        if (celular !== null) {
            set(el.campocelular, celular);
        }
    }

    preencherCadastro2(area, peixe30recruiter, senha,) {
        if (area !== null) {
            set(el.campoArea, area)
            set(el.campoArea, '{downarrow}');
            set(el.campoArea, '{enter}');
        }
        if (peixe30recruiter !== null) {
            set(el.campoPeixe30recruiter, peixe30recruiter);
            set(el.campoPeixe30recruiter, '{downarrow}');
            set(el.campoPeixe30recruiter, '{enter}');
        }
        if (senha !== null) {
            set(el.campoSenha, senha);
        }
    }
    //capo obrigatorio nome em branco
    validaMensagem1() {
        return get_text(el.validaMensagem1)

    }
    //Campo area de atuação em branco ('Voltar')
    validaMensagem2(message) {
        cy.get('button > h5')
            .should('have.text', message)
    }
    //Campo area de atuação em branco ('Precisa de pelo menos 1 item')
    validaMensagem3(message) {
        cy.get('.mui-style-12n5kdb > div > p')
            .should('be.visible', message)
    }
    //Cadastro com email em uso
    validaMensagem4(message) {
        cy.get('.go3958317564')
            .should('be.visible', message)
    }

    validaMensagemm(message) {
        cy.get('.mui-style-1f6eo1b > .MuiTypography-h3')
            .should('be.visible', message)
    }

    clickButton() {
        // cy.get('button[type=button]').eq(0).click()
        click_index(el.btn, 0)

    }

    clickCheckbox() {
        // cy.get('input[type=checkbox]').eq(0).click()
        click_index(el.clickBox, 0)
    }

    clickContinuar() {
        click(el.btnContinuar)
    }
}
export default new Cadastro()





























