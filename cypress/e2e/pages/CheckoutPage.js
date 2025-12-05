
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

    // Finaliza o pedido
    finalizePayment() {
        cy.get('input[id="terms"]')
            .click()
        cy.get('button[type="submit"]')
            .click()
    }
}

export default new CheckoutPage;