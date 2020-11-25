//alert('Seja bem vindo');

console.log("Mensagem");

console.error("Mensagem de Erro");

let tagH2 = document.querySelector('h2');
let botao = document.querySelector("#trocaCor");

//console.log(getComputedStyle(tagH2, null).getPropertyValue('font-size')); //Pegar valores CSS

//

//console.log(tagH2.style.color);

let funcaoEvento = function() {
    tagH2.style.color = 'yellow';
}

botao.addEventListener("click", funcaoEvento);