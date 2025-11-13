// verificar se no array inicializado existem os seguintes nomes: "Vovó Mafalda", "Lobo Mau", "Branca de Neve"

function varrerLista() {
    var nomes = [
      "Papai Noel",
      "Vovó Mafalda",
      "Coelinho da Páscoa",
      "Lobo Mau",
      "Chapeuzinho Vermelho",
    ];
  var listaNome = [];

  for (var i = 0; i < nomes.length; i++) {
    /* console.log(nomes[i]); */

    if (
      nomes[i] === "Vovó Mafalda" ||
      nomes[i] === "Lobo Mau" ||
      nomes[i] === "Branca de Neve"
    ) {
      listaNome.push(nomes[i]);
    }
  }

  console.log("lista: " + listaNome);
}

varrerLista();