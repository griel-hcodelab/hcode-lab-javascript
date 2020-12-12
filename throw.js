function Excecao(mensagem) {
  this.message = mensagem;
  this.name = "Excecao";
}

function naoNumeroException() {
  this.message = "É necessário informar um número";
  this.name = "naoNumeroException";
}

function dividir(a, b) {
  if (typeof a !== "number") {
    throw new naoNumeroException();
  } else if (typeof b !== "number") {
    throw new naoNumeroException();
  } else if (b === 0) {
    throw new Excecao("O número para divisão não pode ser zero");
  }
  return a / b;
}

//console.log(dividir(10, "a"));
console.log(dividir(10, 0));
