
class SuccessPage {

    // Valida se o pedido foi finalizado corretamente
    validateOrder() {
        cy.contains('STATUS DO PEDIDO')
            .should('be.visible')
        cy.get('div[id="order-status"]')
            .should('be.visible')
        cy.contains('Obrigado pelo seu pedido')
            .should('be.visible')
        cy.contains('ID do Pedido: ')
            .should('be.visible')
        cy.contains('Total: ')
            .should('be.visible')
        cy.contains('Status: ')
            .should('be.visible')
    }
}

export default new SuccessPage();