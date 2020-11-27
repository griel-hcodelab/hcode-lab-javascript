//Diferenças de VAR, LET e CONST.

//Se o valor não for alterado, é uma boa prática criá-la em uma constante

//O let não usa o conceito de hoisting, portanto ele não é inicalizado antes da declaração, o que pode deixar o arquivo mais leve
let nome = "Roberto";
console.log(nome);

//var x let - Escopo
let numero = 25;
let numero2 = 20;

if (numero > numero2) {
  let mensagem =
    "Olá! Não vou aparecer no console porque estou dentro do escopo do IF";
}
let mensagem = "Estou fora do escopo então posso ser acessado";
console.log(mensagem);

//Uso do Const - Uma constanta não pode ser alterada
const numero3 = 28;

//Const com array. Ele será constantemente um array, mas poderá ser adicionados conteúdos
const carros = ["Ferrari", "Porshe", "Gurgel"];
carros.push("Fusca");
console.log(carros);
