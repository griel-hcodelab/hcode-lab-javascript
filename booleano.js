const desconto = 0;
console.log(Boolean(desconto)); //Retorna se a variável é true ou false

const descontoBlackFriday = 50; //Todo valor diferente de zero é TRUE
console.log(typeof Boolean(descontoBlackFriday), Boolean(descontoBlackFriday));

const valor = false;
console.log(typeof valor, valor);

const nome = Boolean("");
console.log(nome); //String vazia é false

const a = Boolean(null);
console.log(a); //Null é false

const b = Boolean(undefined);
console.log(typeof b, b); //Undefined no JS é false
