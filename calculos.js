export function somar(a, b) {
  return a + b;
}
export function subtrair(a, b) {
  return a - b;
}
export function multiplicar(a, b) {
  return a * b;
}
export function dividir(a, b) {
  return a / b;
}
export function regra3(a, b, c) {
  return dividir(multiplicar(c, b), a);
}

//module.exports = somar;

/** Forma de exportar módulo antigo com node
 * module.exports = {
  somar,
  menor: subtrair,
  dividir,
  multiplicar,
  regraDeTres: regra3,
};*/

/*export default {
  somar,
  menor: subtrair,
  dividir,
  multiplicar,
  regraDeTres: regra3,
};
*/
