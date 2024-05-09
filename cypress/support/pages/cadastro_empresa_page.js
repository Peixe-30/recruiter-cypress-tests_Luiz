///<reference types ='cypress' />

var el = require('../Elements/cadastro_elements').CADASTRO
const {
    set, click, click_index, get_text
} = require('../actions')

class Cadastro_empresa {

    visitarSite() {
        cy.visit(el.url)

    }

    // Até Vídeo (Apenas URL do youtube)
    cadastroEmpresa1(tipo, banner1, banner2, razaoSocial, CNPJ, ramo, nomeFantasia, numeroFuncionarios) {

        if (tipo == 'Matriz') {
            click_index(el.campoMatriz, 0)
        }

        if (tipo == 'Filial') {
            click_index(el.campoFilial, 1)
        }

        if (banner1 !== null) {

            cy.get('svg[data-testid="EditIcon"]').eq(0).click()
            cy.get('#upload-new-image-file-input')
                .selectFile('images/Empresa.png', { force: true })
            cy.get('#upload-image-button-confirm').click()
        }

        if (banner2 !== null) {

            cy.get('svg[data-testid="EditIcon"]').eq(1).click()
            cy.get('#upload-new-image-file-input')
                .selectFile('images/Empresa2.PNG', { force: true })
            cy.get('#upload-image-button-confirm').click()
        }

        if (razaoSocial !== null) {

            cy.get('input[name=namecompany]')
                .type(razaoSocial)
        }

        if (CNPJ !== null) {
            cy.get('input[name=cnpj]').type(CNPJ)
        }

        if (ramo !== null) {
            cy.get('input[id=autocomplete_sector]').type(ramo)
            cy.get('input[id=autocomplete_sector').type('{downarrow}')
            cy.get('input[id=autocomplete_sector').type('{enter}')
        }

        if (nomeFantasia !== null) {
            cy.get('input[name=namefantasy]').type(nomeFantasia)
        }

        if (numeroFuncionarios !== null) {
            cy.get('input[id=autocomplete_autocomplete-numberemployer]')
                .type(numeroFuncionarios)
            cy.get('input[id=autocomplete_autocomplete-numberemployer')
                .type('{downarrow}')
            cy.get('input[id=autocomplete_autocomplete-numberemployer')
                .type('{enter}')
        }


        cy.get('svg[data-testid=EditIcon]').eq(2).click()
        cy.get('#upload-new-image-file-input')
            .selectFile('images/Empresa3.PNG', { force: true })
        cy.get('#upload-image-button-confirm').click()

        cy.get('input[name=videoUrl]').type('https://www.youtube.com/watch?v=FCMYM01Wflc')
    }

    // A partir do telefone
    cadastroEmpresa2(telefone, site, descricao, CEP) {

        if (telefone !== null) {

            cy.get('input[name=phonecompany]').type(telefone)
        }

        if (site !== null) {

            cy.get('input[name=sitecompany]').type(site)
        }

        cy.get('input[name=peixe30]').type('https://peixe30.com.br/user/luizaugusto_51')
        cy.get('input[name=instagram]').type('https://www.instagram.com/')
        cy.get('input[name=linkedin]').type('https://linkedin.com')
        cy.get('input[name=facebook]').type('https://www.facebook.com/')

        if (descricao !== null) {
            cy.get('.jodit-wysiwyg').eq(0).type(descricao)
        }

        if (CEP !== null) {
            cy.get('input[placeholder=CEP]').type(CEP)
        }
        // if (Endereço !== null) {

        //     cy.get('input[placeholder=Endereço]').eq(2).type(Endereço)
        // }

        cy.get('input[placeholder=Número]').type(290)
        cy.get('input[placeholder=Complemento]').type('1° andar')

    }

    // clearCEP() {
    //     cy.get('input[placeholder=CEP]').click().clear()
    // },

    clearEndereço() {
        cy.get('input[placeholder=Endereço]').click().clear()
    }
    clearBairro() {
        cy.get('input[placeholder=Bairro]').click().clear()
    }
    clearNumero() {
        cy.get('input[placeholder=Número]').click().clear()
    }

    clearCidade() {
        cy.get('input[placeholder=Cidade]').click().clear()
    }

    clearEstado() {
        cy.get('input[placeholder="Selecione o estado"]').click().clear()
    }
    clicarSAlvar() {
        click(el.btnrSAlvar)
    }
    click() {
        click_index(el.click, 1)
    }
    clickEmpresas() {
        click(el.click_empresas)
    }
    clickButtonNovo() {
        click(el.btn_novo)
    }
    // Cadastro empresas

    validaMensagem(message) {

        cy.get('div > h3').should('have.text', message)
    }
    validaMensagem1(message) {

        cy.get('div > h1').should('have.text', message)
    }
    //Criar empresas 
    validaMensagem2(message) {
        cy.get('.MuiTypography-h1').should('have.text', message)
    }
    //Valida mensagem para os banners
    validaMensagem3(posicao, message) {
        cy.get('.mui-style-5o7p8i').eq(posicao).should('have.text', message)
    }
    validaMensagem(message) {
        cy.get('.mui-style-k2m8sx').should('have.text', message)
    }

    validaMensagemRazãoSocial(massage) {
        cy.get('.mui-style-0 > p').should('have.text', massage)
    }

    validaMensagemCNPJ(massage) {
        cy.get('.mui-style-0 > p').should('have.text', massage)
    }

    validaMensagemRamo(massage) {
        cy.get('.mui-style-0 > p').should('have.text', massage)
    }

    validaMensagemNomefantasia(massage) {
        cy.get('.mui-style-0 > p').should('have.text', massage)
    }

    validaMensagemFuncionarios(massage) {
        cy.get('.mui-style-0 > p').should('have.text', massage)
    }

    validaMensagemTelefone(massage) {
        cy.get('.mui-style-0 > p').should('have.text', massage)
    }

    validaMensagemSite(massage) {
        cy.get('.mui-style-0 > p').should('have.text', massage)
    }


    validaMensagemDescricao(massage) {
        cy.get('.mui-style-0 > p').should('have.text', massage)
    }

    validaMensagemCEP(massage) {
        cy.get('.mui-style-0 > p').should('have.text', massage)
    }

    validaMensagemEndereço(massage) {
        cy.get('.mui-style-0 > p').eq(1).should('have.text', massage)
    }
}
export default new Cadastro_empresa()


