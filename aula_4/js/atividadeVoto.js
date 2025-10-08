function verificarVoto(){
    const idade = prompt("Digite a sua idade:");
    const votoFacul = (idade >= 16 && idade < 18) || idade > 70;

    console.log("idade digitada:" + idade);
    console.log("Seu voto é facultativo?" + votoFacul);
}
verificarVoto();