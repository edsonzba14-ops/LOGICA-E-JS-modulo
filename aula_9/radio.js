function ganhacamisaWhile() {
    var resposta = prompt("atenda");

    while (resposta != "tech4fm é show") {
        alert("resposta errada");
        resposta = prompt("atenda");
    }

    alert("você ganhou a camisa");
}

ganhacamisaWhile();

//funçao ganhacamisaWhile
//variavel resposta = prompt "atenda"
//enquanto a resposta não for igual a tech4fm é show, vai lançar um alerta "resposta errada" e logo depois, vai voltar pra o prompt
//já se a resposta for igual a tech4fm é show, dispara o alerta "voce ganhou a camisa"
