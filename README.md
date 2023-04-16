# Projeto Node.js com Banco de Dados

Este é um projeto básico que mostra como usar o Node.js com o banco de dados MySQL. Ele inclui exemplos de migrations, seeds e consultas básicas ao banco de dados.

## Instalação

Antes de começar, você precisará instalar o Node.js e o MySQL no seu computador. Você também precisará ter um editor de código instalado, como o Visual Studio Code.

Para instalar as dependências do projeto, execute o seguinte comando no terminal:

npm install

arduino
Copy code

## Configuração do Banco de Dados

Antes de executar o projeto, você precisará configurar o seu banco de dados. Abra o arquivo `config.json` na pasta `config` e insira as suas configurações de banco de dados, como o nome do banco de dados, nome de usuário e senha.

```json
{
  "development": {
    "dialect": "mysql",
    "host": "localhost",
    "username": "root",
    "password": "",
    "database": "crud"
  }
}

Migrations
As migrations são usadas para criar tabelas e modificar a estrutura do banco de dados. Para criar uma migration, execute o seguinte comando no terminal:

lua
Copy code
npx sequelize-cli migration:generate --name create-users
Este comando cria um novo arquivo de migration na pasta migrations. Abra o arquivo e adicione as suas instruções SQL para criar a tabela e as colunas que você precisa. Em seguida, execute o seguinte comando para executar a migration:

Copy code
npx sequelize-cli db:migrate
Este comando aplica a migration ao seu banco de dados.

Seeds
As seeds são usadas para preencher o banco de dados com dados iniciais. Para criar uma seed, execute o seguinte comando no terminal:

lua
Copy code
npx sequelize-cli seed:generate --name demo-users
Este comando cria um novo arquivo de seed na pasta seeders. Abra o arquivo e adicione os dados que você deseja inserir no banco de dados. Em seguida, execute o seguinte comando para executar a seed:

less
Copy code
npx sequelize-cli db:seed:all
Este comando aplica todas as seeds ao seu banco de dados.

Executando o Projeto
Para executar o projeto, execute o seguinte comando no terminal:

sql
Copy code
npm start
Este comando inicia o servidor e abre a porta 3000. Abra o seu navegador e visite http://localhost:3000 para ver o resultado.

Conclusão
Este é um projeto básico que mostra como usar o Node.js com o banco de dados MySQL. Ele inclui exemplos de migrations, seeds e consultas básicas ao banco de dados. Espero que isso ajude você a entender como trabalhar com o Node.js e o MySQL.