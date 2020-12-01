const empresa = "Griel";
const nome = empresa;
console.log(typeof empresa, empresa);
console.log(typeof nome, nome);

/*
'' = 
"" =
*/

const hcodeLab = 'Hcode Lab "treinamentos"';
console.log(typeof hcodeLab, hcodeLab);
const hcodeLab2 = 'Hcode Lab, "Treinamentos"'; //As barras \ escapam o caractere, permitindo as aspas por exemplo
console.log(typeof hcodeLab2, hcodeLab2);
const hcodeLab3 = `Hcode's Lab "Treinamentos", desenvolvido por ${empresa}`; //Template string é a forma recomendada de escrever
console.log(hcodeLab3);
