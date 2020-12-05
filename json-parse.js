//Transforma string convertida em um json objeto
const texto =
  '{"primeiroNome":"Roberto","ultimoNome":"Filho","favLang":["PHP","JavaScript"],"idade":31}';

const objeto = JSON.parse(texto);

console.log(objeto.favLang[0]);

objeto.favLang.forEach((item) => {
  console.log(`Adoro programar em ${item}`);
});
