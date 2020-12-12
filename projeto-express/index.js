const express = require("express");

const servidor = express();

servidor.listen(3000, () => {
  console.log("Servidor Online!");
});

servidor.get("/produtos", (request, response) => {
  //request é a solicitação feita, response é a solicitação respondida no navegador
  response.json({
    sucesso: true,
  });
});
