Feature: Validação do fluxo de compra com inserção de dados faltantes
  Como um usuário
  Quero adicionar um produto ao carrinho e tentar finalizar o pedido sem colocar dados obrigatórios
  Para validar que o pedido não foi finalizado

  Scenario: Validar erros no fluxo de compra
    Given que eu entro na página inicial e faço o login
    And o produto 'Moletom com capuz \"Se você acha que nada é impossível...\"' está listado na Home
    When adiciono o produto 'Moletom com capuz \"Se você acha que nada é impossível...\"' ao carrinho
    And avanço para a tela de Checkout, não insiro os dados e valido se as mensagens de erro aparecem
    Then o pedido deve não ser finalizado
