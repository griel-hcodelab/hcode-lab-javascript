//IIFE Instantly Invoque Function Events

const calcularIdade = function (anoNasc, callback) {
  setTimeout(callback, 3000);
  return new Date().getFullYear() - anoNasc;
};

console.log(
  calcularIdade(1989, function () {
    console.log("A função anônima de callback foi chamada");
  })
);

(function () {
  console.log("Olá");
})();
//(function(){CÓDIGO} ()) Closeure
