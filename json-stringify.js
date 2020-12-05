//Transforma um JSON em uma string comum para ser usado com facilidade em outras linguagens
const pessoa = {
  primeiroNome: "Roberto",
  ultimoNome: "Filho",
  favLang: ["PHP", "JavaScript"],
  idade: 31,
  mostrarNomeCompleto: function () {
    return `${this.primeiroNome}`;
  },
};

console.log(JSON.stringify(pessoa, null, 4));
//Nome do json, se havera substituição, nível da tabulação
console.log(pessoa);
