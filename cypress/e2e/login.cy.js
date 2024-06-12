///<reference types ='cypress' />

import login_page from '../support/pages/login_page'
const { randomEmail, randomPassword, randomFirstname, randomLastname, randomPhone, randomPassword2 } =

    require('../support/utils')


beforeEach('Acessando a pagina de login', () => {
    login_page.visitarSite()
})


it('Login com sucesso', () => {
    login_page.preencherLogin('luiz4ugu2to@gmail.com', '@teste1234')
    login_page.clickButtonAce_conta()
    login_page.ValidaMessage3('Informações gerais')
});
it('Campo email em branco', () => {
    login_page.preencherLogin(null, randomPassword())
    login_page.clickButtonAce_conta()
});
it('Campo email invalido', () => {
    login_page.preencherLogin('luiz@gmail', randomPassword())
    login_page.clickButtonAce_conta()
    login_page.validaMensagem('Digite um e-mail válido!')
});

it('Campo senha em branco', () => {
    login_page.preencherLogin(randomEmail(), null)
    login_page.clickButtonAce_conta()
});

it('Senha com no minimo 6 caracteres', () => {
    login_page.preencherLogin('luiz4ugu2to@gmail.com', randomPassword2())
    login_page.clickButtonAce_conta()
});

it.only('Campo senha invalida', () => {

    cy.get('input[name=email]').type('luiz4ugu2to@gmail.com')
    cy.get('input[name=password]').type(123456666)
    cy.get('button[type=submit]').click()
    var text = cy.get(".go3958317564").wait(5000).invoke('text')
    console.log(text)
    //cy.get('.go3958317564').eq(0).wait(5000).should('be.visible').and('contain', 'Usuário ou senha inválido.')

    //go3958317564
    // login_page.preencherLogin('luiz4ugu2to@gmail.com', randomPassword2())
    // login_page.clickButtonAce_conta()
    // login_page.invalido()

});



