//const calculo = require("./calculos.js");
import { somar, subtrair, dividir, multiplicar, regra3 } from "./calculos.js";
//O uso do ./ indica que devo procurar o arquivo na pasta, senão o Node irá procurar na pasta node_modules
//O uso de {destructuring} deixa o código mais leve, importando somente o que for necessário

console.log(somar(10, 20));
console.log(subtrair(50, 20));
console.log(multiplicar(7, 8));
console.log(dividir(50, 2));
console.log(regra3(1000, 500, 200));

//Criar um arquivo padrão de package.json: $ npm init -y
