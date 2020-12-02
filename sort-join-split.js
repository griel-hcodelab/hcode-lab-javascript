const nomes = ["Felipe", "Bianca", "Julia", "Fernando", "Zerivaldo"];
//console.log(nomes.sort()); //Organizar em ordem alfabética
console.log(nomes.sort().reverse()); //Organiza em ordem alfabética reversa

//let msg = "Socorram-me subi num onibus em marrocos";
let msg = "radar";
console.log(msg.split(" ")); //Irá separar a string em array em cada espaço
console.log(msg.split(" ").length); //Irá retornar a quantidade de itens do array
msg2 = msg.split("").reverse(); //Irá reverter a mensagem
console.log(msg2);

//

console.log(msg2.join("")); //Irá exibir a mensagem de trás pra frente
