# Projeto Entrega e Assinatura de Produtos:

Este é um projeto básico que mostra como usar o Node.js com o banco de dados MySQL. Ele inclui exemplos de migrations, seeds e consultas básicas ao banco de dados.

## Instalação

Antes de começar, você precisará instalar o Node.js e o MySQL no seu computador. Você também precisará ter um editor de código instalado, como o Visual Studio Code.

Para instalar as dependências do projeto, execute o seguinte comando no terminal:

```bash
$ npm install
```

## Configuração do Banco de Dados

Antes de executar o projeto, você precisará configurar o seu banco de dados. Abra o arquivo `config.json` na pasta `config` e insira as suas configurações de banco de dados, como o nome do banco de dados, nome de usuário e senha. No arquivo `database.js`, não se esqueça de especificar na linha 5, qual o banco de dados você deseja utilizar, como é mostrado nos exemplos abaixo:

```json
{
  "development": {
        "username": "root",
        "password": "",
        "database": "crud",
        "host": "localhost",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "",
        "database": "crud",
        "host": "localhost",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": "",
        "database": "crud",
        "host": "localhost",
        "dialect": "mysql"
    }
}
```

Migrations
As migrations são usadas para criar tabelas e modificar a estrutura do banco de dados. Para criar uma migration, execute o seguinte comando no terminal:

```bash
$ npx sequelize-cli db:migrate
```

Seeds
As seeds são usadas para preencher o banco de dados com dados iniciais. Para criar uma seed, execute o seguinte comando no terminal:

```bash
$ npx sequelize-cli db:seed:all
```

Executando o Projeto
Para executar o projeto, execute o seguinte comando no terminal:

```bash
$ nodemon server.js
```

Login e Autenticação
Com as seeds devidamente executadas, você pode realizar o login utilizando as credenciais utilizando a rota POST: http://localhost:3000/api/auth/login

```json
{
    "email": "joao.silva@gmail.com",
    "password": "secret1"
}
```

