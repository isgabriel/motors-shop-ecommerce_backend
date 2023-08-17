#BackEnd - Motors grupo17

## Instalação e Execução

É necessário ter instalado em sua máquina o `Node` e o gerenciador de pacotes `yarn`.
Para executar a aplicação localmente, siga estas etapas:

1. Clone este repositório.
2. Abra o repositório no vscode. Abra um terminal para as instalações e um terminal para o postgreSQL.
3. No terminal para o PostgreSQL, digite psql, faça o login e crie um banco de dados (CREATE DATABASE [nome do banco];).
4. Configure as credenciais de acesso num novo arquivo `.env`, seguindo o exemplo em .env.example. Em /db, substituia por /[nome do banco].
5. Rode os comandos:

```
    yarn
    yarn add --save @nestjs/config swagger class-validator class-transformer
    yarn add prisma -D
    yarn add @prisma/client
    yarn prisma migrate dev
    yarn run start:dev
```

## Rotas da API

Criação de anúncio: `POST /cars`

```
{
"name": "Porche - 717",
"coverImg": "https://blogger",
"price": 0.00,
"year": 2020,
"km": 11.000,
"description": "aaaa",
"color": "branco",
"gasoline": "FLEX",
"tablePife": 1,
"business": false
}
```

Edição de anúncio: `PATCH /cars/:id`

Deleção de anúncio: `DELETE /cars/:id`

Listagem de um anúncio: `GET /cars/:id`

Listagem de todos os anúncios: `GET /cars`

Criação de imagem relacionada a um anúncio: `POST /imgs`

```
{
"url_img":"https://aaa.com",
"carProduct":"39e647c3-d4df-4474-af8a-8c5d94aff9ec"
}
```

Deleção de imagem: `DELETE /imgs/:id` -> id da img

Edição de imagem: `PATCH /imgs/:id` -> id da img

---

Essa documentação está em construção, bem como a API.

Para acessar o repositório do Frontend, <a href="https://github.com/motors-shop-kenzie/motors-shop-FrontEnd" target="_blank">clique aqui</a>
