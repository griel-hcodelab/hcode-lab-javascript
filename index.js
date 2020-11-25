console.log("Olá Mundo");

let a = 1;
let b = 2;

console.log(a + b);

function calcular(a, b, o) {
  return eval(`${a} ${o} ${b}`);
}

console.log(calcular(13, 49, "*"));
