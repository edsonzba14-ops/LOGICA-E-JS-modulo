function ingressoRadio() {
  // o laço vai rodar até 8 pessoas chegarem (por exemplo)
  for (var i = 1; i <= 6; i++) {
    var pessoa = prompt("Quem chegou aí? (" + i + "ª pessoa)");

    if (i <= 5) {
      alert(pessoa + " ganhou ingresso!");
    } else {
      alert(pessoa + " não ganhou ingresso!");
    }
  }
}

ingressoRadio();
