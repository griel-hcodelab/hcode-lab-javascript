//const calculo = require("./calculos.js");
const {
  somar,
  menor,
  multiplicar,
  dividir,
  regraDeTres,
} = require("./calculos.js");
//O uso do ./ indica que devo procurar o arquivo na pasta, senão o Node irá procurar na pasta node_modules
//O uso de {destructuring} deixa o código mais leve, importando somente o que for necessário

console.log(somar(10, 20));
console.log(menor(50, 20)); //Referência ao subtrair do calculos.js
console.log(multiplicar(7, 8));
console.log(dividir(50, 2));
console.log(regraDeTres(1000, 500, 200)); //Referência ao regra3 do calculos.js
