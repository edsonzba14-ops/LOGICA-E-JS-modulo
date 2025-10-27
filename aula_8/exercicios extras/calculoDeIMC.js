//Crie uma função calcula_imc(peso, altura) que:
//Retorna o valor do IMC e a classificação:
//Abaixo do peso, Peso normal, Sobrepeso, Obesidade.

function calcula_imc(peso, altura) {
    var imc = peso / (altura * altura);
    var classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    return "IMC: " + imc.toFixed(2) + ", Classificação: " + classificacao;
}
console.log(calcula_imc(73, 1.83));
console.log(calcula_imc(56, 1.65));
console.log(calcula_imc(85, 1.80)); 
console.log(calcula_imc(50, 1.60));
