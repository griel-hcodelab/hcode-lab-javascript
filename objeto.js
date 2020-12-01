const meses = ["Janeiro", "Fevereiro", "Março"];
//const meses = new Array("Janeiro", "Fevereiro", "Março"); //Como o JavaScript irá executar
console.log(typeof meses, meses);
//No JavaScript o Array não é Array, Array é Objeto

const valor = Boolean(0);
console.log(typeof valor, valor);

console.log(meses instanceof Array); //Verifica se a variavel é uma instancia de um objeto

const data = new Date();
console.log(data instanceof Date);
