function pegarDados(event) {
  event.preventDefault();

  const formulario = document.querySelector("form");

  const dados = {};

  [...formulario.querySelectorAll("input")].forEach((tags) => {
    dados[tags.name] = tags.value;
  });

  console.log(dados);

  //Acessando dados do formulário através do FormData
  const form = new FormData(formulario);
  console.log(form.get("name"));
  console.log(
    form.forEach((value, key) => {
      console.log(value, key);
    })
  );
}
/**
 * Roberto name
  roberto@griel.com.br email

 */
