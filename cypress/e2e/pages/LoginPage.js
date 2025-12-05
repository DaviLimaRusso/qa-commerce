
class LoginPage {

    // Valida se estou na tela de Login
    IsLoginPage() {
        cy.get('form[id="login-form"]')
            .should('be.visible')
        cy.log('Acessou a página de login corretamente')
    }

    // Faz o login
    DoLogin(user) {
        cy.get('input[id="email"]')
            .type(user.email, { log: false })
        cy.get('input[id="password"]')
            .type(user.password, { log: false })
        cy.get('button[type="submit"]')
            .click()
        cy.get('img[alt="QACommerce Logo"]')
            .click()
    }
}

export default new LoginPage;