function calcularMediaNotas() {
  var notas = [];
  var soma = 0;

  for (var i = 0; i < 5; i++) {
    var nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
    notas.push(nota);
    soma += nota;
  }

  var media = soma / 5;
  console.log("A média das notas é: " + media);
}

calcularMediaNotas();
