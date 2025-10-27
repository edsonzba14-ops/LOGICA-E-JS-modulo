function apostas() {
  let pergunta = 0;
  let aposta = 0;
  let contador = 0;

  while (contador <= 3) {
    pergunta = Number(prompt("Qual a aposta?"));
    aposta += pergunta;
    contador++;
  }
  console.log(aposta);
}

apostas();
