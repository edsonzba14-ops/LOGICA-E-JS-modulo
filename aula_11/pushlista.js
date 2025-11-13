function addNome() {
  var nome = ["Edson", "Gustavo", "Pedro"];

  while (nome !== "") {
    nome.push(prompt("bem vindo a chamada! Qual seu nome?"));
    console.log(nome);
  }
}

addNome();
