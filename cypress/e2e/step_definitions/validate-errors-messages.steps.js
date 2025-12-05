import {When, Then, Before } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../pages/HomePage'
import cartPage from '../pages/CartPage'
import checkoutPage from '../pages/CheckoutPage'

Before(function() {
    cy.fixture('user.json').then((user) => {
        this.user = user;
    });
});

When('avanço para a tela de Checkout, não insiro os dados e valido se as mensagens de erro aparecem', function() {
    homePage.AccessCartPage()
    cartPage.accessCheckoutPage()
    checkoutPage.finalizePayment()
})

Then('o pedido deve não ser finalizado', function () {
    checkoutPage.validateErrorMessages()
})