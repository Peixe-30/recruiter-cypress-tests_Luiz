///<reference types ='cypress' />

import cadastro_page from "../support/pages/cadastro_page";
const { randomEmail, randomPassword, randomFirstname, randomLastname, randomPhone, randomPassword2 } =

    require('../support/utils')

beforeEach('Acessando a pagina de cadastro', () => {
    cadastro_page.visitarSite()
});

it('Cadastro com sucesso', () => {
    cadastro_page.preencherCadastro1(randomFirstname(), randomLastname(), randomEmail(), randomPhone())
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem2('VOLTAR')
    cadastro_page.preencherCadastro2('head hunter', 'google', randomPassword())
    cadastro_page.clickCheckbox()
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagemm('Sua conta no Peixe 30 está quase pronta.')
});

it('Campo nome em branco', () => {
    cadastro_page.preencherCadastro1(null, randomLastname(), randomEmail(), randomPhone())
    cadastro_page.clickContinuar()
    // cadastro_page.validaMensagem1().then((element) => {
    //     expect(element.text()).eq('Campo obrigatório')
    // })
    cadastro_page.validaMensagem1().should('have.text', 'Campo obrigatório')

});

it('Campo sobrenome em branco', () => {
    cadastro_page.preencherCadastro1(randomFirstname(), null, randomEmail(), randomPhone())
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem1('Campo obrigatório')

});
it('Campo email em branco', () => {
    cadastro_page.preencherCadastro1(randomFirstname(), randomLastname(), null, randomPhone())
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem1('Campo obrigatório')
});
it('Campo telefone ou celular em branco', () => {
    cadastro_page.preencherCadastro1(randomFirstname(), randomLastname(), randomEmail(), null)
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem1('Mínimo 14 caracteres')
});

it('Campo area de atuação em branco', () => {
    cadastro_page.preencherCadastro1(randomFirstname(), randomLastname(), randomEmail(), randomPhone())
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem2('VOLTAR')
    cadastro_page.preencherCadastro2(null, 'google', randomPassword())
    cadastro_page.clickCheckbox()
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem3('Precisa de pelo menos 1 item')
});

it('Campo como soube do Peixe30 Recruiter em branco', () => {
    cadastro_page.preencherCadastro1(randomFirstname(), randomLastname(), randomEmail(), randomPhone())
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem2('VOLTAR')
    cadastro_page.preencherCadastro2('job', null, randomPassword())
    cadastro_page.clickCheckbox()
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem3('Precisa de pelo menos 1 item')
});

it('Campo senha em branco', () => {
    cadastro_page.preencherCadastro1(randomFirstname(), randomLastname(), randomEmail(), randomPhone())
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem2('VOLTAR')
    cadastro_page.preencherCadastro2('job', 'google', null)
    cadastro_page.clickCheckbox()
    cadastro_page.clickContinuar()
});

it('Campo senha limite min caracteres', () => {
    cadastro_page.preencherCadastro1(randomFirstname(), randomLastname(), randomEmail(), randomPhone())
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem2('VOLTAR')
    cadastro_page.preencherCadastro2('job', 'google', randomPassword2())
    cadastro_page.clickCheckbox()
    cadastro_page.clickContinuar()
});


it.only('Cadastro com email em uso', () => {
    cadastro_page.preencherCadastro1(randomFirstname(), randomLastname(), 'luiz4ugu2to@gmail.com', randomPhone())
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem2('VOLTAR')
    cadastro_page.preencherCadastro2('job', 'google', randomPassword())
    cadastro_page.clickCheckbox()
    cadastro_page.clickContinuar()
    cadastro_page.validaMensagem4('Esse e-mail já está em uso')
});






