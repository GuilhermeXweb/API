# API

API HTTP construída com Node.js e Express, com uma estrutura inicial de modelo de usuários usando Prisma e MongoDB.

## Tecnologias

- Node.js
- Express 5
- Prisma 6
- MongoDB

## Requisitos

- Node.js instalado
- Uma instância do MongoDB, caso o Prisma seja utilizado

## Instalação

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/GuilhermeXweb/API.git
cd API
npm install
```

Para configurar o Prisma, crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="mongodb://localhost:27017/api"
```

O arquivo `.env` não deve ser publicado no repositório.

## Executando a API

Inicie o servidor em modo de desenvolvimento:

```bash
npm start
```

O servidor será iniciado em `http://localhost:3000`.

## Endpoints

### Criar usuário

`POST /usuarios`

Exemplo:

```bash
curl -X POST http://localhost:3000/usuarios \
  -H "Content-Type: application/json" \
  -d '{"name":"Guilherme","email":"guilherme@example.com"}'
```

Resposta:

```json
{
  "name": "Guilherme",
  "email": "guilherme@example.com"
}
```

### Listar usuários

`GET /usuarios`

Exemplo:

```bash
curl http://localhost:3000/usuarios
```

Resposta:

```json
[
  {
    "name": "Guilherme",
    "email": "guilherme@example.com"
  }
]
```

## Prisma

O schema define o modelo `User` no MongoDB com os campos `id`, `name` e `email`. O servidor atual mantém os usuários em memória; a persistência no MongoDB ainda precisa ser integrada às rotas.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor com `node --watch` |
| `npm test` | Script de teste ainda não implementado |

## Licença

Este projeto usa a licença ISC.# API