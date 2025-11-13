function descobrirFruta() {
  var frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];
  var posicao = parseInt(prompt("Digite a posição da fruta que você quer descobrir"));

    if (posicao >= 0 && posicao < frutas.length) {
        console.log("A fruta na posição " + posicao + " é: " + frutas[posicao]);
    } else {
        console.log("Posição inválida. Por favor, digite um número entre 0 e " + (frutas.length - 1) + ".");
    }
}

descobrirFruta();