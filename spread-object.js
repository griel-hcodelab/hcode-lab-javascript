const pessoa = {
  nome: "Roberto",
  idade: 31,
};

const usuario = {
  email: "roberto@griel.com.br",
  senha: 123456,
};

console.log({
  ...pessoa,
  ...usuario,
});
/* {nome: 'Roberto', idade: 31, email: 'roberto@griel.com.br', senha: 123456} */
