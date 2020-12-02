//Método pop retira um item do array no final
//Método push adiciona um item ao array no final

const ranking = [300, 400, 150, 250, 500];
ranking.sort();
ranking.reverse();
const removido = ranking.pop(); //Irá remover o último índice e guardar o valor numa variável
const resultado = ranking.push(1000);
ranking
  .sort(function (a, b) {
    return a - b;
  })
  .reverse();
console.log(ranking);
console.log(removido);
console.log(resultado);
