const valores1 = new Array("JavaScript", "Hcode", 50, false);
const valores2 = ["PHP", new Date()];
console.log(valores1);
console.log(valores2);

for (let i = 0; i <= valores2.length - 1; i++) {
  console.log(valores2[i]);
}
//Recomendado quando precisa manipular o array

console.log("-------------------");

for (let valor of valores1) {
  console.log(valor);
}
//Recomendado somente para a leitura do array
