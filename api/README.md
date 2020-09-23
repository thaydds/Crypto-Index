# Crypto Index api

Essa é a crypto index api construída em cima da **CoinDesk**. A [documentação está disponível aqui](https://www.coindesk.com/coindesk-api).

---

## Endpoints

obs:nas rotas com a tag PRIVATE é preciso passar um token JWT valido para acessar.

### /users [GET][PRIVATE]

retorna um array de usuários cadastrados no sistema

### /users [POST]

cria um usuário no sistema no sistema passando os seguintes parametros:
```json
{
	"email": "thaydasdasddSs@gmail.com",
	"password": "123466"
}
```
obs: o email deve obedecer o formato de email e a senha ser uma string de digitos possuindo um tamanho igual a 6.


### /sessions [POST]

verifica se o usuário é cadastrado no sistema e retorna dados do usuário e o token JWT.
```json
{
	"email": "thaydasdasddSs@gmail.com",
	"password": "123466"
}
```

### /btc [GET][PRIVATE]

retorna os valores do bitcoin no seguinte formato:

```json
{
  "time": {
    "updated": "Sep 22, 2020 00:20:00 UTC",
    "updatedISO": "2020-09-22T00:20:00+00:00",
    "updateduk": "Sep 22, 2020 at 01:20 BST"
  },
  "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD & CNY respectively).",
  "bpi": {
    "USD": {
      "code": "USD",
      "rate": "$10,475.31",
      "description": "United States Dollar",
      "rate_float": 10475.3075,
      "locale": "en-US"
    },
    "CNY": {
      "code": "CNY",
      "rate": "¥40,202.50",
      "description": "Chinese Yuan",
      "rate_float": 40202.5,
      "locale": "zh-cn"
    },
    "BRL": {
      "code": "BRL",
      "rate": "R$ 74.374,68",
      "description": "Brazilian Real",
      "rate_float": 74374.6833,
      "locale": "pt-BR"
    },
    "EUR": {
      "code": "EUR",
      "rate": "9.637,28 €",
      "description": "Euro",
      "rate_float": 9637.2829,
      "locale": "de-DE"
    },
    "CAD": {
      "code": "CAD",
      "rate": "$15,084.44",
      "description": "Canadian Dollar",
      "rate_float": 15084.4428,
      "locale": "en-CA"
    }
  }
}
```

### /btc [POST][PRIVATE]

Altera o valor base das moedas EUR, CAD e BRL de um arquivo json na api passando um json no seguinte formato:

```json
{
  "currency": "BRL",
  "value": 7.1
}
```

### /btc/currencies [GET][PRIVATE]

retorna os valores bases das moedas no seguinte formato: 

```json
{
  "BRL": "5.500",
  "EUR": "0.400",
  "CAD": "1.440"
}
```







