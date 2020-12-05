const usuario = {
  nome: "Roberto",
  email: "roberto@griel.com.br",
  senha: "123456",
};

const pessoa = {
  nome: "Roberto Filho",
  idade: 50,
};

const uniao = Object.assign(usuario, pessoa); //Em caso de conflitos, o objeto da direita tem prioridade

//console.log(uniao);

console.log(Object.keys(uniao));

Object.keys(uniao).forEach(function (e) {
  console.log(`A chave do objeto é ${e} e o valor é ${uniao[e]}`);
});
/*A chave do objeto é nome e o valor é Roberto Filho
A chave do objeto é email e o valor é roberto@griel.com.br
A chave do objeto é senha e o valor é 123456
A chave do objeto é idade e o valor é 50
*/

console.log("--------");

for (let chave in uniao) {
  console.log(chave);
}
/*nome
email
senha
idade
 */
