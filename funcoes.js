//Declaração de função. A função declarada sofre hoisting, ou seja, ela é puxada para o topo do código então pode ser chamada antes de ser declarada
function darBoasVindas(nome) {
  console.log(`Ei ${nome}, seja bem vindo!`);
}
darBoasVindas("Roberto");

//Expressão de função
const darAdeus = function () {
  console.log("Até a próxima!");
};
darAdeus();
