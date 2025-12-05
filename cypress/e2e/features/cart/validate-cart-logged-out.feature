Feature: Validação do carrinho deslogado
  Como um usuário deslogado
  Quero adicionar um produto ao carrinho
  Para validar que o produto foi adicionado corretamente e o preço exibido na Home é igual ao do carrinho

  Scenario: Validar o produto no carrinho estando deslogado
    Given que eu entro na página inicial
    And o produto 'Moletom com capuz \"Se você acha que nada é impossível...\"' está listado na Home
    When adiciono o produto 'Moletom com capuz \"Se você acha que nada é impossível...\"' ao carrinho
    And acesso a página do carrinho
    Then o produto 'Moletom com capuz \"Se você acha que nada é impossível...\"' deve aparecer no carrinho
    And o preço deve ser igual ao que está exibido na Home