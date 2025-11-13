// primeiro for, um prompt, 3 ouvintes (valor inicial) cada vez que entrar no for de fora (valor final 2)

function pergunta() {
  for (var ouvinte = 1; ouvinte <= 3; ouvinte++) {
    alert("vez do ouvinte " + ouvinte);

    for (var chance = 1; chance <= 2; chance++) {
      var resposta = prompt("chance " + chance + ": quanto é 1 + 1?");

      if (resposta === "11") {
        alert("acerto miseravi, ouvinte " + ouvinte + " ganhou o bagulin");
        break;
      } else {
        alert("burro");
      }
    }
  }
}

pergunta();
