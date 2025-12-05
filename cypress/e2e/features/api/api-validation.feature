Feature: Testes de API (GET e POST)
  Como um sistema que consome os endpoints
  Quero validar os endpoints principais
  Para garantir a disponibilidade dos produtos e autenticação do usuário

  Scenario: Buscar lista de produtos (GET)
    When faço uma requisição GET para buscar produtos
    Then o status code da API deve ser 200
    And a resposta deve conter uma lista de produtos cadastrados

  Scenario: Realizar Login do Usuário (POST)
    When faço o login com credenciais válidas
    Then o status code da API deve ser 200
    And a resposta deve retornar um token de autenticação