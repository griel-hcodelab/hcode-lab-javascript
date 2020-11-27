const seculo = 20;
const seculo1 = "21";
const seculo2 = new Number(21);
//Criar um número através de objeto
const seculo3 = Number("19");
const seculo4 = +"16"; //Converte para número

console.log(typeof seculo, seculo);
console.log(typeof seculo1, seculo1);
console.log(typeof seculo2, seculo2);
console.log(typeof seculo3, seculo3);
console.log(typeof seculo4, seculo4);

const pi = 3.14;
console.log(typeof pi, pi);

const a = parseFloat("3.14");
const b = parseInt("3.14");
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof b.toString(), b.toString());

//

const margin = "20px";
console.log(typeof +margin, +margin);
console.log(typeof parseInt(margin), parseInt(margin)); //Converte o texto para números
