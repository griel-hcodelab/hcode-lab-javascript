const hora = 21;

if (hora < 18) {
  console.log("Ainda é dia");
} else {
  console.log("Já é noite");
}

const periodo = hora < 18 ? "Dia" : "Noite";
//(condição) ? "Se true" : "Se false"
console.log(periodo);
