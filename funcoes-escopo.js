let idade; //Declarei a função antes

const calcularIdade = function (anoNasc) {
  global.anoAtual = new Date().getFullYear(); //Declarei a variavel com escopo global de forma interna
  idade = anoAtual - anoNasc;
  return idade;
};

console.log(calcularIdade(1989));
console.log(calcularIdade(1955));
console.log(idade);
console.log(anoAtual);
