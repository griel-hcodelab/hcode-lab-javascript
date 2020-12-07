//Declaração de função. A função declarada sofre hoisting, ou seja, ela é puxada para o topo do código então pode ser chamada antes de ser declarada
function darBoasVindas(argumento, argumento2 = "Hcode Lab") {
  //Isso é um argumento
  console.log(`Ei ${argumento}, seja bem vindo ao ${argumento2}!`);
}
darBoasVindas("Roberto"); //Isso é um parâmetro

//Expressão de função
const darAdeus = function (argumento) {
  console.log(`Tchau ${argumento}, até a próxima!`);
};
darAdeus("Roberto");
