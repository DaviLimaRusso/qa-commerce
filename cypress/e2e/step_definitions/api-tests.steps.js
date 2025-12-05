import {When, Then, Before} from "@badeball/cypress-cucumber-preprocessor"
import apiPage from "../pages/ApiPage"

Before(function() {
    cy.fixture('user.json').then((user) => {
        this.user = user;
    });
});

When("faço uma requisição GET para buscar produtos", function () {
    apiPage.getAllProducts()
})

Then("o status code da API deve ser {int}", function (statusCode) {
    apiPage.validateStatus(statusCode)
})

Then("a resposta deve conter uma lista de produtos cadastrados", function () {
    apiPage.validateProductsList()
})

When("faço o login com credenciais válidas", function () {
    apiPage.login(this.user.login)
})

Then("a resposta deve retornar um token de autenticação", function () {
    apiPage.validateToken()
})