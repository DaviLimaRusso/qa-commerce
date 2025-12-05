Feature: Validação do fluxo de compra
  Como um usuário
  Quero adicionar um produto ao carrinho e validar o processo de compra completo
  Para validar que o pedido foi finalizado corretamente

  Scenario: Validar o fluxo de compra
    Given que eu entro na página inicial e faço o login
    And o produto 'Moletom com capuz \"Se você acha que nada é impossível...\"' está listado na Home
    When adiciono o produto 'Moletom com capuz \"Se você acha que nada é impossível...\"' ao carrinho
    And avanço para a tela de Checkout, insiro os dados de entrega, seleciono a forma de pagamento
    Then o pedido deve ser finalizado
    And deve aparecer a mensagem de sucesso