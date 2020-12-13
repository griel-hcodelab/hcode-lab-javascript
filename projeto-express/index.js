const express = require("express"); //Dentro da const express, ira carregar as dependencias do express dentro do node_modules

const servidor = express(); //A const servidor irá invocar a função do express para, então, rodar

const NeDB = require("nedb"); //Const que irá conter a informação do banco de dados nedb
const db = new NeDB({
  //Const que será uma instancia do NeDB
  filename: "produtos.db", //Nome do banco de dados
  autoload: true, //Informando que quero sempre iniciar o db
});

servidor.listen(3000, () => {
  //Informo que quero ouvir uma determinada porta. Acessar localhost:PORTA
  console.log("Servidor Online!!"); //Quando o servidor rodar, imprimir no console uma mensagem
});

servidor.use(
  //Solicitações 'middleware', ações para rodar entre a solicitação e exibição dos dados
  express.json()
);
servidor.use(
  express.urlencoded({
    extended: true, //Fazer com que o servidor consiga ler os dados enviados via post
  })
);

//Request: São as solicitações feitas, por exemplo, alguma variável enviada pelo usuário
//Response: O que será retornado ao navegador
servidor.get("/produtos", function (request, response) {
  db.find({}).exec(function (erro, dados) {
    //acessar o banco de dados mas sem nenhuma query e executar. Ele retornará um erro ou os dados
    if (erro) {
      console.error(erro);
    } else {
      response.json(dados);
    }
  });
  /*response.send({
    //response.json irá retornar um json padrão
    sucesso: true,
  });*/
});

servidor.post("/produtos", function (req, res) {
  db.insert(req.body, (erro, novoProduto) => {
    if (erro) {
      console.error(erro);
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(novoProduto);
    }
  });
});
