import homePage from '../pages/HomePage'
import cartPage from '../pages/CartPage'
import * as constants from '../pages/Constants'

describe('Validate cart', () => {
    beforeEach(function () {
        cy.fixture('user.json').then((user) => {
            this.user = user
        })
    })

    it ('Should validate cart logged out', function () {

        var product = 'Moletom com capuz "Se você acha que nada é impossível..."'

        cy.visit(constants.URL_SELLER)
        homePage.validateHomeProduct(product)
        homePage.addProductToCart(product)
        homePage.AccessCartPage()
        cartPage.isProductInTheCart(product)
    })
})