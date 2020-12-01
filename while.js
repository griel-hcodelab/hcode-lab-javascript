//While é usado para repetir quando você não sabe quantos resultados podem existir
let vezes = 0;

while (new Date().getSeconds() < 30) {
  console.log(new Date().getSeconds());
  vezes++;
}
console.log("Terminou", vezes);
