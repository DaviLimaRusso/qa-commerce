# QA-Commerce 🛒

Loja virtual Geek para simulação de testes e automação.

---

## Parte 1: Como rodar o Site (Aplicação)

Antes de rodar os testes, você precisa subir a aplicação localmente.

### Pré-requisitos
* **Node.js**: [Download aqui](https://nodejs.org/en/)
* **Git**: [Download aqui](https://git-scm.com/downloads)

### Instalação e Execução
No terminal, execute os comandos:

1. Clone o repositório:
```bash
  git clone [https://github.com/DaviLimaRusso/qa-commerce.git](https://github.com/DaviLimaRusso/qa-commerce.git)
  
  cd qa-commerce
```
2. Instale as dependências:

```bash
  npm install
```
3. Suba o servidor e o banco de dados:

```bash
  npm start
```
O console mostrará:

Site acessível em: http://localhost:3000/

Documentação da API em: http://localhost:3000/api-docs/

Importante: Mantenha este terminal aberto enquanto roda os testes abaixo.

## Parte 2: Automação de Testes (Cypress)
Esta suíte de testes valida fluxos críticos de E2E (Frontend) e API (Backend) utilizando Cypress e Cucumber.

### Tecnologias da Automação

Cypress (v13.15)

Cucumber Preprocessor (BDD)

JavaScript (Page Objects & Service Objects)

Node.js (v20)

### Arquitetura do Projeto
O projeto segue o padrão Page Object Model para facilitar a manutenção:

```
    cypress/
    ├── e2e/
    │   ├── features/           # Cenários BDD (Gherkin)
    │   ├── pages/              # Lógica de interação (Web e API)
    │   └── step_definitions/   # Conexão entre Gherkin e Código
    ├── fixtures/               # Massa de dados (ex: user.json)
    └── support/                # Configurações globais
```

### ▶️ Como Executar os Testes
Abra um novo terminal na pasta do projeto e escolha uma opção:

Opção A: Interface Visual (Recomendado) Para assistir os testes rodando no navegador:

```bash
    npx cypress open
```

1. Escolha E2E Testing.

2. Selecione o navegador (Chrome).

3. Clique na feature que deseja validar.

### Opção B: Modo Headless (Rápido) Para rodar todos os testes via linha de comando:

```bash
    npx cypress run
```

### Cenários Cobertos
🌐 Web (Frontend)
Carrinho: Adicionar produto ao carrinho e validar persistência.

Checkout: Validação de campos obrigatórios (Validação de erros de formulário) e fluxo de compra completo.

### API (Backend)
GET /produtos: Validação de contrato e status code da listagem.

POST /login: Validação de autenticação e recebimento do Token.

### Autor
Desenvolvido por Davi Russo | *Parceria: Fábio Araújo, Bruna Emerich e Tamara Fontanella
