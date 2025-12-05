
class ApiPage {

    // Variável que armazena a resposta da última requisição
    lastResponse = null

    // Busca os produtos
    getAllProducts() {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/api/produtos',
            failOnStatusCode: false
        }).then((res) => {
            this.lastResponse = res
            cy.log('Produtos encontrados: ' + res.body.products?.length || 0)
        })
    }

    // Faz o login
    login(user) {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/login',
            body: {
                email: user.email,
                password: user.password
            },
            failOnStatusCode: false
        }).then((res) => {
            this.lastResponse = res
        })
    }

    // Valida o Status Code
    validateStatus(statusCode) {
        expect(this.lastResponse).to.not.be.null
        expect(this.lastResponse.status).to.eq(statusCode)
    }

    // Valida a lista de produtos
    validateProductsList() {
        const body = this.lastResponse.body

        expect(body).to.have.property('products')
        expect(body.products).to.be.an('array')
        expect(body.products.length).to.be.greaterThan(0)
    }

    // Valida o Token
    validateToken() {
        const body = this.lastResponse.body

        expect(body).to.have.property('token')
        expect(body.token).to.not.be.empty
        cy.log('Token recebido: ' + body.token)
    }
}

export default new ApiPage();