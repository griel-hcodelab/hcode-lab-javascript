const calcularIdade = function (anoNasc) {
  return new Date().getFullYear() - anoNasc;
};

console.log(calcularIdade(1989));
console.log(calcularIdade(1955));
