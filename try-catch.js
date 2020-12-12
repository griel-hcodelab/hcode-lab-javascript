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

try {
  console.log(dividir(100, 0));
} catch (erro) {
  if (erro instanceof naoNumeroException) {
    console.error("Deu erro", erro, erro.message);
  } else if (erro instanceof Excecao) {
    console.log("Deu erro", erro, erro.message);
  }
} finally {
  console.warn("Finalizou!");
}
try {
  console.log(dividir(10, "t"));
} catch (erro) {
  if (erro instanceof naoNumeroException) {
    console.error("Deu erro", erro, erro.message);
  } else if (erro instanceof Excecao) {
    console.log("Deu erro", erro, erro.message);
  }
}
try {
  console.log(dividir(10, 33));
} catch (erro) {
  if (erro instanceof naoNumeroException) {
    console.error("Deu erro", erro, erro.message);
  } else if (erro instanceof Excecao) {
    console.log("Deu erro", erro, erro.message);
  }
}
try {
  console.log(dividir(10, 0));
} catch (erro) {
  if (erro instanceof naoNumeroException) {
    console.error("Deu erro", erro, erro.message);
  } else if (erro instanceof Excecao) {
    console.log("Deu erro", erro, erro.message);
  }
}
try {
  console.log(dividir(50, 10));
} catch (erro) {
  if (erro instanceof naoNumeroException) {
    console.error("Deu erro", erro, erro.message);
  } else if (erro instanceof Excecao) {
    console.log("Deu erro", erro, erro.message);
  }
}
console.log("Após o bloco try");
