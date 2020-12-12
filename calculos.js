function somar(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
function regra3(a, b, c) {
  return dividir(multiplicar(c, b), a);
}

//module.exports = somar;

module.exports = {
  somar,
  menor: subtrair,
  dividir,
  multiplicar,
  regraDeTres: regra3,
};
