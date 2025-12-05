import * as constants from '../pages/Constants'

class HomePage {

    // Clica no "MINHA CONTA" para realizar login
    accessLoginPage() {
        cy.get('a[id="account-link"]')
            .click()
    }

    // Valida se o produto está na Home e salva o preço dele
    validateHomeProduct(product) {
        cy.wait(constants.ONE_SEC_WAIT_TIME)
        cy.get('body').then(($body) => {

            const foundProduct = $body.text().includes(product)

            if (foundProduct) {
                cy.log('Produto encontrado na Home')
            } else {
                throw new Error(`Produto não encontrado: ${product}`)
            }
        })
        cy.contains('div[class="card-body"]', product)
            .find('p:contains("Preço:")')
            .invoke('text')
            .then(text => {
                const priceInHome = text.replace('Preço: R$', '').trim()
                cy.log('Preço capturado na Home:', priceInHome)
                cy.wrap(priceInHome).as('homePrice')
            })
    }

    // Adiciona o produto ao carrinho
    addProductToCart(product) {
        cy.contains('div[class="card-body"]', product)
            .find('button.btn.btn-primary.add-to-cart')
            .click()
        cy.wait(constants.ONE_SEC_WAIT_TIME)
    }

    // Acessa a página do carrinho
    AccessCartPage() {
        cy.get('a[href="/cart.html"]')
            .contains('CARRINHO')
            .click()
    }
}

export default new HomePage;