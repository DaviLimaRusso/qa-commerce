import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../pages/HomePage'
import cartPage from '../pages/CartPage'
import * as constants from '../pages/Constants'

Given('que eu entro na página inicial', function() {
    cy.visit(constants.URL_SELLER)
})

Given('o produto {string} está listado na Home', function(product) {
    homePage.validateHomeProduct(product)
})

When('adiciono o produto {string} ao carrinho', function(product) {
    homePage.addProductToCart(product)
})

When('acesso a página do carrinho', function() {
    homePage.AccessCartPage()
})

Then('o produto {string} deve aparecer no carrinho', function(product) {
    cartPage.isProductInTheCart(product)
})

Then('o preço deve ser igual ao que está exibido na Home', function() {
})