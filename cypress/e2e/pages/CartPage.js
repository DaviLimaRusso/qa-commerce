

class CartPage {

    // Verifica se o produto foi adicionado no carrinho corretamente e valida se o preço está igual ao da Home
    isProductInTheCart(product) {
        cy.get('div[id="cart-list"]')
            .contains(product)
            .should('be.visible')
        cy.get('@homePrice').then(priceHome => {

            cy.contains('div[id="cart-list"] div[class="cart-item mb-4"]', product)
                .find('p:contains("Preço:")')
                .invoke('text')
                .then(text => {
                    const priceCart = text.replace('Preço: R$', '').trim()
                    cy.log('Preço no Carrinho:', priceCart)

                    expect(priceCart).to.eq(priceHome)
                })
        })
    }

    // Acessa o Checkout para finalização do pedido
    accessCheckoutPage() {
        cy.get('a[href="/checkout.html"]')
            .should('be.visible')
            .click()
    }
}

export default new CartPage;