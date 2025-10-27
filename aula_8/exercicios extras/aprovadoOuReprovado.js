// Crie uma função verificarMedia(nota1, nota2) que: Calcula a média. Exibe "Aprovado" se média ≥ 6, caso contrário "Reprovado".

function verificarMedia(nota1, nota2) {
    var media = (nota1 + nota2) / 2;
    if (media >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

verificarMedia(7, 8); //aprovado
verificarMedia(5, 4); //reprovado