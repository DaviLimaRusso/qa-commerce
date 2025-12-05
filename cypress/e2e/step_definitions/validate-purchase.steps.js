import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor'
import loginPage from '../pages/LoginPage'
import homePage from '../pages/HomePage'
import cartPage from '../pages/CartPage'
import checkoutPage from '../pages/CheckoutPage'
import SuccessPage from '../pages/SuccessPage'
import * as constants from '../pages/Constants'

Before(function() {
    cy.fixture('user.json').then((user) => {
        this.user = user;
    });
});

Given('que eu entro na página inicial e faço o login', function() {
    cy.visit(constants.URL_SELLER)
    homePage.accessLoginPage()
    loginPage.IsLoginPage()
    loginPage.DoLogin(this.user.login)
})

When('avanço para a tela de Checkout, insiro os dados de entrega, seleciono a forma de pagamento', function() {
    homePage.AccessCartPage()
    cartPage.accessCheckoutPage()
    checkoutPage.inputFreightData(this.user.dataFreightCheckout)
    checkoutPage.choosePaymentPix()
})

Then('o pedido deve ser finalizado', function () {
    checkoutPage.acceptTerms()
    checkoutPage.finalizePayment()
})

Then('deve aparecer a mensagem de sucesso', function () {
    SuccessPage.validateOrder()
})



