/**
 * sessionStorage = Cada aba ou janela tem uma sessaão independente
 */

const pegarDados = (event) => {
  event.preventDefault();

  const formulario = document.querySelector("form");
  const dados = {};
  [...formulario.querySelectorAll("input")].forEach((tag) => {
    dados[tag.name] = tag.value;
    sessionStorage.setItem(tag.name, dados[tag.name]);
    localStorage.setItem(tag.name, dados[tag.name]);
  });
  console.log(sessionStorage);
  mostrarNome();
};

function mostrarNome() {
  if (localStorage.getItem("name")) {
    document.querySelector(
      "h2"
    ).innerHTML = `Seja bem-vindo ${sessionStorage.getItem("name")}`;
  }
}
mostrarNome();

function clearStorage() {
  localStorage.removeItem("name");
  location.reload();
}
