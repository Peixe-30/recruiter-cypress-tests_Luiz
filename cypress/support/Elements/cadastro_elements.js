///<reference types ='cypress' />

export const CADASTRO = {

    url: 'https://rh.beta.peixe30.com.br/v2/registrar',
    url_login: 'https://rh.beta.peixe30.com.br',
    campoNome: 'input[name=firstname]',
    campoSobrenopme: 'input[name=lastname]',
    campoEmail: 'input[name=email]',
    campocelular: 'input[name=phone]',
    campoArea: '#autocomplete_actuation',
    campoPeixe30recruiter: '#autocomplete_sourceOfOrigin',
    campoSenha: 'input[name=password]',
    campoMatriz: '.mui-style-1qu2aw4',
    campoFilial: '.mui-style-1qu2aw4',
    btnContinuar: '.mui-style-8atqhb > button',
    buttonAce_conta: 'button[type=submit]',
    btnSAlvar: 'button[type=submit]',
    btn_novo: 'svg[data-testid=AddCircleIcon',
    click: '.mui-style-6cyqq',
    click_empresas: 'svg[data-testid="BusinessIcon"]',
    clickBox: 'input[type=checkbox]',
    validaMensagem1: '.mui-style-12n5kdb > div > p'
}