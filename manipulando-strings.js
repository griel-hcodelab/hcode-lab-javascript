const site = "www.GrIeL.com.br";
console.log(site);
console.log(site.length); //quantos caracteres tem
console.log(site.substr(0, 3)); //A partir da primeira posição (0), ande X casas (3)
console.log(site.substr(4, site.length)); //A partir da posição 4, me retorne até o final da string
console.log(site.charAt(5)); //Retorna o char que estiver no índice 5 da string, que começa em zero
console.log(site[3]); //Retorna o índice da string como se fosse um array
console.log(site.substr(-1, 1)); //Começa do final da string e pega a "ultima" letra
console.log(site.toLowerCase()); //Deixa tudo minusculo
console.log(site.toUpperCase()); //Deixa tudo maiusculo
console.log(site.substr(-6, 3).toUpperCase()); //Encadeando métodos de strings
console.log(site.replace(".com", ".dev")); //Substitui um trecho da String
console.log(site.includes(".com")); //Retorna se existe o parametro dentro da string
console.log(site.indexOf(".com")); //Retorna em qual index que o parametro está na string
console.log(site.substr(site.indexOf(".com"), site.length)); //A partir do índice, retorne até o final

const mensagemBoasVindas = "Seja bem vindo ao Hcode Lab";
console.log(mensagemBoasVindas.split(" ")); //Divide a string em uma Array

const email = "roberto@griel.com.br";
const emailSplit = email.split("@");
const nomeDoUsuário = emailSplit[0];
const dominio = emailSplit[1];
console.log(nomeDoUsuário, dominio);
//Dividimos a string no @ e separamos o nome de usuário pelo domínio

console.log(email.substr(email.indexOf("@") + 1, email.length));
