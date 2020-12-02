const paises = ["Brasil", "Peru", "Uruguai", "Paraguai", "Chile", "Argentina"];

paises.forEach(function (valor, index) {
  //console.log(`Indice: ${index}: ${valor}`);
  //paises[index] = `${valor} é um país!`;
});
console.log(paises);
console.log(
  paises.map(function (valor, index) {
    return `País: ${valor}`;
  })
);

console.log(
  paises.filter(function (valor, index) {
    return valor.length > 5;
  })
);
//Irá filtrar os paises, retornando somente os que possuirem mais de 5 char

const notasRoberto = [8, 7, 10, 5, 7, 9, 7, 6, 3, 9, 10, 7];
const notaTotal = notasRoberto.reduce(function (total, notaAtual) {
  return total + notaAtual;
}, 0 /*Nota de onde irá começar*/);
console.log(Math.ceil(notaTotal / notasRoberto.length)); //Arrenondar para cima
console.log(Math.round(notaTotal / notasRoberto.length)); //Arredondar se mais perto do número maior
