const exibirNome = function (nome) {
  console.log(nome);
};
const exibirSobrenome = (sobrenome) => console.log(sobrenome);
exibirNome("Roberto");
exibirSobrenome("Griel");

const pessoas = ["Geisa", "João", "Sara"];

const nomesInvertidos = pessoas.map((valor, index) =>
  pessoas[index].split("").reverse().join()
);

console.log(nomesInvertidos);
