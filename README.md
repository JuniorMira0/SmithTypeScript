# TrybeSmith

## About:

Este projeto consiste em itens medievais armazenados no formato API estruturados no sistema de camadas MSC (Models, Services, Controllers) e escritos usando Typescript.

É possível realizar operações básicas que podem ser feitas em um banco de dados: Criar (C) e Ler (R). A base de dados utilizada para a criação deste projeto é o MySQL.

#

## Technologies:

- NodeJS
- Express
- Typescript
- MSC Architecture (Model-Service-Controller)

#


#
## Routes:

### Login
- Faça um Login com usuário e senha (POST/login)

### Products
- Listar todos os produtos (GET/product)
- Registar um novo produto (POST/product)
- Pesquise um usuário por id (GET /product/:id)

### Users
- Listar todos os usuários (GET /users)
- Registre um novo usuário (POST/users)
- Pesquise uma categoria por id (GET /categories/:id)

### Orders

- Listar todos os pedidos (GET /orders)
- Registar uma nova encomenda (POST/orders)

## Como instalar o aplicativo:

To download the code:

```
git clone git@github.com:eduardomuchak/27-trybesmith.git
```

Enter the project root folder:

```
cd 
```

#

## Running the aplication Locally VS Docker (recommended: Docker):

## Locally:

### Requirements:

- NodeJs Version: >=16.0.0

### Steps:

Rename the .env.example file to only .env and set the enviroment variables:

- MYSQL_HOST=db
- MYSQL_USER=root
- MYSQL_PASSWORD=password
- JWT_SECRET=secret

Install the dependencies:

```
  npm install
```

#

## Running with Docker:

### Requirements:

- Docker-Compose Version: >=1.29

### Steps:

Run node and db containers with this command:

```bash
  docker-compose up -d
```

Run the following code to attach a container:

```bash
  docker exec -it trybesmith bash
```

Rename the .env.example file to only .env and set the enviroment variables:

- MYSQL_HOST=db
- MYSQL_USER=root
- MYSQL_PASSWORD=password
- JWT_SECRET=secret

Install the dependencies (inside a container):

```
  npm install
```

To create the database:

- Open the MySQL Workbench, and paste the content of the file:

```bash
Trybesmith.sql
```

- The project database follows the structure below:

<p align="center">
  <img 
    src="./images/diagram-der.png"
  >
</p>

To run the aplication write the command:

```bash
npm start
```


** Projeto desenvolvido para fins de estudos durante minha formação na Trybe.
