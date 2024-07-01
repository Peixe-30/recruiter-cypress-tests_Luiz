///<reference types ='cypress' />

import cadastro_empresa_page from '../support/pages/cadastro_empresa_page'
import Cadastro_empresa from '../support/pages/cadastro_empresa_page'
import login_page from '../support/pages/login_page'
const { randomEmail, randomPassword, randomFirstname, randomLastname, randomPhone, randomPassword2 } =

    require('../support/utils')

//beforeEach('Cadastrar empresas', () => {
    //login_page.visitarSite()
    //login_page.preencherLogin('luiz4ugu2to@gmail.com', '@teste1234')
    //login_page.clickButtonAce_conta()
    //cadastro_empresa_page.validaMensagem('Informações gerais')
//})

// it.only('Cadastro empresas', () => {
//     cadastroEmpresas.clickEmpresas()
//     cadastroEmpresas.validaMensagem1('Empresas')
//     cadastroEmpresas.clickButtonNovo()
//     cadastroEmpresas.validaMensagem2('Criar empresa')
//     cadastroEmpresas.cadastroEmpresa1('Matriz', 'bebidas')
//     cadastroEmpresas.cadastroEmpresa2()
// });

//it('Banner1 em branco', () => {

    //cadastro_empresa_page.click()
    //cadastro_empresa_page.clickEmpresas()
    //cadastro_empresa_page.validaMensagem1('Empresas')
    //cadastro_empresa_page.clickButtonNovo()
    //cadastro_empresa_page.validaMensagem2('Criar empresa')
   // cadastro_empresa_page.cadastroEmpresa1('Matriz', null, 'banner2', 'Luiz Augusto', 36673156000180, 'bebidas', 'Luiz Augusto', 19,)
   // cadastro_empresa_page.cadastroEmpresa2(81998077890, 'https://peixe30.com.br', 'https://peixe30.com.br/user/luizaugusto_51', 'https://linkedin.com', 'https://www.facebook.com/', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 54759265)
    //cadastro_empresa_page.clicarSAlvar()
   // cadastro_empresa_page.validaMensagem3(0, 'Campo obrigatório')
//})

//it('Banner2 em branco', () => {

   // cadastroEmpresas.clickEmpresas()
   // cadastroEmpresas.validaMensagem1('Empresas')
   // cadastroEmpresas.clickButtonNovo()
   // cadastroEmpresas.validaMensagem2('Criar empresa')
    //cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', null, 'bebidas',)
    //cadastroEmpresas.cadastroEmpresa2()
   // cadastroEmpresas.validaMensagem3(0, 'Campo obrigatório')
//});

//it('Razão Social em bracnco', () => {

   // cadastroEmpresas.clickEmpresas()
   // cadastroEmpresas.validaMensagem1('Empresas')
    //cadastroEmpresas.clickButtonNovo()
   // cadastroEmpresas.validaMensagem2('Criar empresa')
    //cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'bebidas', null)
    //cadastroEmpresas.cadastroEmpresa2()
   // cadastroEmpresas.validaMensagem1('Mínimo 3 caracteres')
//});

//it.only('CNPJ em Branco', () => {
   // cadastroEmpresas.clickEmpresas()
   // cadastroEmpresas.validaMensagem1('Empresas')
   // cadastroEmpresas.clickButtonNovo()
    //cadastroEmpresas.validaMensagem2('Criar empresa')
   // cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 'bebidas', null)
    //cadastroEmpresas.cadastroEmpresa2()
   // cadastroEmpresas.validaMensagem1('Digite um CNPJ válido')
//});

//it('Ramo em Branco', () => {
    //cadastroEmpresas.clickEmpresas()
   // cadastroEmpresas.validaMensagem1('Empresas')
   //cadastroEmpresas.clickButtonNovo()
    //cadastroEmpresas.validaMensagem2('Criar empresa')
    //cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, null, 'Primeira Automação', 19)
   // cadastroEmpresas.cadastroEmpresa2(81998987689)
   // cadastroEmpresas.validaMensagem('Campo obrigatório')
//});

//it('Nome Fantasia em Branco', () => {
    //cadastroEmpresas.clickEmpresas()
   //cadastroEmpresas.validaMensagem1('Empresas')
   // cadastroEmpresas.clickButtonNovo()
    //cadastroEmpresas.validaMensagem2('Criar empresa')
    //cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', null, 19)
    //cadastroEmpresas.cadastroEmpresa2(81998987689)
   // cadastroEmpresas.validaMensagem('Mínimo 3 caracteres')
//});

//it('Numero de funcionarios em Branco', () => {
   // cadastroEmpresas.clickEmpresas()
   // cadastroEmpresas.validaMensagem1('Empresas')
   // cadastroEmpresas.clickButtonNovo()
   // cadastroEmpresas.validaMensagem2('Criar empresa')
   // cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', 'Primeira Automação', null)
   // cadastroEmpresas.cadastroEmpresa2()
    //cadastroEmpresas.validaMensagem('Campo obrigatório')
//});

//it('Telefone em Branco', () => {
    //cadastroEmpresas.clickEmpresas()
    //cadastroEmpresas.validaMensagem1('Empresas')
    //cadastroEmpresas.clickButtonNovo()
    //cadastroEmpresas.validaMensagem2('Criar empresa')
    //cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', 'Primeira Automação', 19)
    //cadastroEmpresas.cadastroEmpresa2(null)
   // cadastroEmpresas.validaMensagem('Número de telefone inválido')

//});
//it('Site em Branco', () => {
    //cadastroEmpresas.clickEmpresas()
   // cadastroEmpresas.validaMensagem1('Empresas')
    //cadastroEmpresas.clickButtonNovo()
    //cadastroEmpresas.validaMensagem2('Criar empresa')
    //cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', 'Primeira Automação', 19)
    //cadastroEmpresas.cadastroEmpresa2(81998645890, null)
   // cadastroEmpresas.validaMensagem('Digite uma URL válida')
//});

//it('Descrição em Branco', () => {
   //cadastroEmpresas.clickEmpresas()
    //cadastroEmpresas.validaMensagem1('Empresas')
   // cadastroEmpresas.clickButtonNovo()
   // cadastroEmpresas.validaMensagem2('Criar empresa')
   // cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', 'Primeira Automação', 19)
   // cadastroEmpresas.cadastroEmpresa2(81998645890, 'https://www.linkedin.com/feed', null)
   // cadastroEmpresas.validaMensagem('Mínimo 100 caracteres')
//});

//it(' CEP em Branco', () => {
   // cadastroEmpresas.clickEmpresas()
    //cadastroEmpresas.validaMensagem1('Empresas')
   // cadastroEmpresas.clickButtonNovo()
   // cadastroEmpresas.validaMensagem2('Criar empresa')
   // cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', 'Primeira Automação', 19)
   // cadastroEmpresas.cadastroEmpresa2(81998645890, 'https://www.linkedin.com/feed', 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', null)
 //   cadastroEmpresas.clicarSAlvar()
   // cadastroEmpresas.validaMensagem('Digite um CEP válido')
//});
//it(' Endereço em Branco', () => {
  //  cadastroEmpresas.clickEmpresas()
  //  cadastroEmpresas.validaMensagem1('Empresas')
   // cadastroEmpresas.clickButtonNovo()
  //  cadastroEmpresas.validaMensagem2('Criar empresa')
   // cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', 'Primeira Automação', 19)
    //cadastroEmpresas.cadastroEmpresa2(81998645890, 'https://www.linkedin.com/feed', 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', 53330170)
    //cadastroEmpresas.clearEndereço()
   // cadastroEmpresas.clicarSAlvar()
    // cadastroEmpresas.validaMensagem('Campo obrigatório')
   // cy.get('body');
//});

//it(' Bairro em Branco', () => {
 //   cadastroEmpresas.clickEmpresas()
   // cadastroEmpresas.validaMensagem1('Empresas')
 //   cadastroEmpresas.clickButtonNovo()
  //  cadastroEmpresas.validaMensagem2('Criar empresa')
   // cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', 'Primeira Automação', 19)
   // cadastroEmpresas.cadastroEmpresa2(81998645890, 'https://www.linkedin.com/feed', 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', 53330170)
  //  cadastroEmpresas.clearBairro()
  //  cadastroEmpresas.clicarSAlvar()
    // cadastroEmpresas.validaMensagem('Campo obrigatório')
  //  cy.get('body');
//});

//it(' Número em Branco', () => {
  //  cadastroEmpresas.clickEmpresas()
  //  cadastroEmpresas.validaMensagem1('Empresas')
  //  cadastroEmpresas.clickButtonNovo()
  //  cadastroEmpresas.validaMensagem2('Criar empresa')
   // cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', 'Primeira Automação', 19)
   // cadastroEmpresas.cadastroEmpresa2(81998645890, 'https://www.linkedin.com/feed', 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', 53330170)
   // cadastroEmpresas.clearNumero()
  //  cadastroEmpresas.clicarSAlvar()
    // cadastroEmpresas.validaMensagem('Campo obrigatório')
  //  cy.get('body');
//});

//it(' Cidade em Branco', () => {
  //  cadastroEmpresas.clickEmpresas()
   // cadastroEmpresas.validaMensagem1('Empresas')
   // cadastroEmpresas.clickButtonNovo()
   // cadastroEmpresas.validaMensagem2('Criar empresa')
   // cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', 'Primeira Automação', 19)
  //  cadastroEmpresas.cadastroEmpresa2(81998645890, 'https://www.linkedin.com/feed', 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', 53330170)
   // cadastroEmpresas.clearCidade()
 //   cadastroEmpresas.clicarSAlvar()
    // cadastroEmpresas.validaMensagem('Campo obrigatório')
   //cy.get('body');
//});

//it(' Estado em Branco', () => {
   // cadastroEmpresas.clickEmpresas()
    //cadastroEmpresas.validaMensagem1('Empresas')
  //  cadastroEmpresas.clickButtonNovo()
   // cadastroEmpresas.validaMensagem2('Criar empresa')
  //  cadastroEmpresas.cadastroEmpresa1('Matriz', 'banner1', 'banner2', 'Automação', 26375822000140, 'bebidas', 'Primeira Automação', 19)
  //  cadastroEmpresas.cadastroEmpresa2(81998645890, 'https://www.linkedin.com/feed', 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', 53330170)
  //  cadastroEmpresas.clearEstado()
//    cadastroEmpresas.clicarSAlvar()
 //   cadastroEmpresas.validaMensagem('Campo obrigatório')
    //cy.get('body');
//});












