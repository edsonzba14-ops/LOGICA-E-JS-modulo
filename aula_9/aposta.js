function apostas() {
    var pergunta = 0;    
    var aposta = 0;
    var contador = 0;
    
    while (contador <= 3) {

        pergunta = Number(prompt("qual a aposta?"));
        aposta = aposta + pergunta;
        contador = contador + 1;
    }
    console.log(aposta)
}

apostas()