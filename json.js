//JavaScript Object Notation {JSON}

class Pessoa {
  constructor(nomePessoa, idadePessoa) {
    this.nome = nomePessoa;
    this.idade = idadePessoa;
  }
  get idade() {
    return `A idade da pessoa é ${this.valorIdade}`;
  }
  set idade(valor) {
    this.valorIdade = Number(valor);
  }
}

const joao = new Pessoa("João", 31);

console.log(joao.nome, joao.idade);

const rafael = {
  nome: "Rafael",
  idade: 25,
};
console.log(rafael.nome, rafael.idade);

//
console.log(joao);
console.log(rafael);
