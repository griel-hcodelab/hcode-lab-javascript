//Transforma um JSON em uma string comum para ser usado com facilidade em outras linguagens
const pessoa = {
  primeiroNome: "Roberto",
  ultimoNome: "Filho",
  favLang: ["PHP", "JavaScript"],
  idade: 31,
  mostrarNomeCompleto: function () {
    return `${this.primeiroNome}`; //Funções não podem ir para um json stringify
  },
};

console.log(JSON.stringify(pessoa));
//Nome do json, se havera substituição, nível da tabulação
console.log(pessoa);
