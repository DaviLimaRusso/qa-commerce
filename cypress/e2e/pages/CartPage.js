

class CartPage {

    // Verifica se o produto foi adicionado no carrinho corretamente
    isProductInTheCart(product) {
        cy.get('div[id="cart-list"]')
            .contains(product)
            .should('be.visible')
    }
}

export default new CartPage;