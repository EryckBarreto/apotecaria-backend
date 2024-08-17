# 🛠️ Projeto de API de Usuários com Express.js e MongoDB

Este projeto é uma API de gerenciamento de usuários construída utilizando Express.js e MongoDB. A API permite o cadastro, autenticação e gerenciamento de usuários, com validação de dados e segurança de senha implementadas.

## 🚀 Tecnologias Utilizadas

* Express.js: Framework web para Node.js.

* MongoDB: Banco de dados NoSQL.
* Mongoose: ORM para MongoDB.
* Express Validator: Middleware para validação de dados.
* bcrypt: Biblioteca para hashing de senhas.
* dotenv: Gerenciamento de variáveis de ambiente.
* CORS: Permite o acesso a recursos de diferentes origens.
* Body-parser: Middleware para parsear requisições HTTP.

## 📚 Estrutura do Projeto

```sh
📁 src
 ┣ 📂 api
 ┃ ┣ 📜 index.js      
 ┃ ┣ 📜 userController.js  
 ┣ 📂 loaders
 ┃ ┣ 📜 express.js     
 ┃ ┣ 📜 mongoose.js 
 ┣ 📂 middlewares
 ┃ ┣ 📜 validators.js      
 ┣ 📂 models
 ┃ ┣ 📜 user.js      
 ┣ 📂 services
 ┃ ┣ 📜 userService.js      
 ┣ 📜 app.js               
```

## 📦 Funcionalidades

* Cadastro de Usuário: Endpoint para cadastrar um novo usuário com validação de dados.

* Autenticação: Hashing de senhas com bcrypt antes de salvar no banco de dados.
* Validação de Dados: Middleware que verifica a conformidade dos dados recebidos, como nome, email, CPF e senha.
* Conexão com MongoDB: Configuração para conexão segura com o banco de dados MongoDB.

## 📝 Pré-requisitos

Antes de rodar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

* Node.js (versão 12 ou superior)

* MongoDB (rodando localmente ou via serviço na nuvem)
* NPM ou Yarn

## ⚙️ Configuração do Ambiente

### Clone o repositório

```sh
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

```sh
cd nome-do-repositorio
```


### Instale as dependências

```sh
npm install
```

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente

```sh
PORT=3000
DATABASE_URI=mongodb://localhost:27017/nome-do-banco
```

## 🚀 Executando o Projeto

### Inicie o servidor

```sh
npm start
```

Acesse a API via `http://localhost:3000/api`.


## 🔍 Testando Endpoints

* Utilize ferramentas como Postman ou Insomnia para testar os endpoints da API.

* Exemplos de endpoints 
  * `POST /api/signup`: Cadastra um novo usuário.

## 🛡️ Segurança

* As senhas dos usuários são armazenadas de forma segura utilizando bcrypt para hashing.

* Validação rigorosa dos dados de entrada com express-validator.

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📫 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
