# Boas vindas ao projeto Crypto Index!

Crypto Index é uma aplicação que simula os valores do bitcoin e várias moedas usando a api  **CoinDesk**. A [documentação está disponível aqui](https://www.coindesk.com/coindesk-api).

---

## Requisitos :wrench:

É necessário possui o Docker e Docker Compose nas versões mais atuais instalados no seu ambiente de desenvolvimento.
[Você pode instalar essas dependências por aqui](https://docs.docker.com/compose/install/).

## Como rodar o projeto :runner:

Para executar o projeto, utilize o seguinte comando na raiz do projeto:

```bash
docker-compose up client
```

Esse comando pode demorar um pouco, uma vez que subimos todos os containers(client, api e database) de uma vez.

Caso queira subir apenas a api e o banco juntos, use o comando:

```bash
docker-compose up api
```

e siga para a pasta client e execute um ```bash
yarn && yarn start```

---

## Documentação

Clique para saber mais sobre as rotas, regras de negócio e especificação:

[client](https://github.com/betrybe/thayrone-technical-test/tree/thayrone-crypto-index/client).

[api](https://github.com/betrybe/thayrone-technical-test/tree/thayrone-crypto-index/api).



