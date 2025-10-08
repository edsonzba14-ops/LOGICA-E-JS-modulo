function verificarEmancipacao() {
    const idade = prompt("Digite a sua idade:");
    const sexo = prompt("Digite seu sexo:");

    const emancipado = (sexo == "masculino" && idade >= 18) || (sexo == "feminino" && idade >= 21);

    console.log("Idade:" + idade);
    console.log("Sexo:" + sexo);
    console.log("É emancipado?" + emancipado);
}
verificarEmancipacao();
