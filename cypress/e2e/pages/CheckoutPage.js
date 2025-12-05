
class CheckoutPage {

    // Coloca dados de entrega
    inputFreightData(user) {
        cy.get('input[id="first-name"]')
            .type(user.firstName)
        cy.get('input[id="last-name"]')
            .type(user.lastName)
        cy.get('input[id="address"]')
            .type(user.address)
        cy.get('input[id="number"]')
            .type(user.number)
        cy.get('input[id="cep"]')
            .type(user.zipcode)
        cy.get('input[id="phone"]')
            .type(user.phoneNumber)
        cy.get('input[id="email"]')
            .type(user.email)
    }

    // Escolhe a forma de pagamento
    choosePaymentPix() {
        cy.get('input[id="payment-pix"]')
            .click()
    }

    // Aceita os termos
    acceptTerms() {
        cy.get('input[id="terms"]')
            .click()
    }

    // Finaliza o pedido
    finalizePayment() {
        cy.get('button[type="submit"]')
            .click()
    }

    // Valida se as mensagens de erro aparecem se não inserir dados nos campos
    validateErrorMessages() {
        cy.get('div[id="alert-container"]')
            .should('be.visible')
        cy.get('input[id="first-name"]')
            .should('have.class', 'is-invalid')
            .siblings('.invalid-feedback')
            .and('have.text', 'Este campo é obrigatório.')
            .log('Campo Nome apareceu com erro corretamente')

        cy.get('input[id="last-name"]')
            .should('have.class', 'is-invalid')
            .siblings('.invalid-feedback')
            .and('have.text', 'Este campo é obrigatório.')
            .log('Campo Sobrenome apareceu com erro corretamente')

        cy.get('input[id="address"]')
            .should('have.class', 'is-invalid')
            .siblings('.invalid-feedback')
            .and('have.text', 'Este campo é obrigatório.')
            .log('Campo Endereço apareceu com erro corretamente')

        cy.get('input[id="number"]')
            .should('have.class', 'is-invalid')
            .siblings('.invalid-feedback')
            .and('have.text', 'Este campo é obrigatório.')
            .log('Campo Número apareceu com erro corretamente')

        cy.get('input[id="cep"]')
            .should('have.class', 'is-invalid')
            .siblings('.invalid-feedback')
            .and('have.text', 'Este campo é obrigatório.O CEP deve ter 8 caracteres.')
            .log('Campo CEP apareceu com erro corretamente')

        cy.get('input[id="email"]')
            .should('have.class', 'is-invalid')
            .siblings('.invalid-feedback')
            .and('have.text', 'Este campo é obrigatório.Por favor, insira um email válido.')
            .log('Campo Email apareceu com erro corretamente')

        cy.get('input[id="terms"]')
            .should('have.class', 'is-invalid')
            .siblings('.invalid-feedback')
            .and('have.text', 'Este campo é obrigatório.')
            .log('Campo Termos e Condições apareceu com erro corretamente')
    }
}

export default new CheckoutPage;