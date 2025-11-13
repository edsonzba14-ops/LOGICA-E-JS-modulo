function exWhile() {
  var resposta = prompt("Qual é a sua resposta?");
  while (resposta === "Feliz Natal!") {
    contador++;
    // ...
  }

  var contador = 0;
  while (contador <= 5) {
    contador++;
    // ...
  }
}

function exFor() {
  for (var i = 0; i <= 5; i++) {
    // ...
  }

  ///////////////////////////////////////////////////////////////
  var valorInicial = 5;
  var valorFinal = 0;
  for (var contador = valorInicial; contador <= valorFinal; contador--) {
    // ...
  }
}

// primeiro for, um prompt, 3 ouvintes (valor inicial) cada vez que entrar no for de fora (valor final 2)

function pergunta() {
  for (var ouvinte = 1; ouvinte <= 3; ouvinte++) {
    alert("Vez do ouvinte " + ouvinte);

    // Cada ouvinte tem 2 chances
    for (var chance = 1; chance <= 2; chance++) {
      var resposta = prompt("Chance " + chance + ": qual a resposta?");

      if (resposta === "42") {
        alert("Parabéns! Ouvinte " + ouvinte + " ganhou uma caneca!");
        break;
      } else {
        alert("errado");
      }
    }
  }
}

pergunta();
