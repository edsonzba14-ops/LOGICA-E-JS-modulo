//O frentista irá digitar o preço da gasolina com 3 dígitos (sendo o último um zero). O programa irá exibir o valor a pagar com apenas 2 dígitos.
//Valor digitado = 4.940
//Para o usuário = 4.94
//Tudo isso no console.log

function calculoGasolina() {
    var valorGasolina = parseFloat(4.940);
    console.log("Valor a pagar: " + valorGasolina.toFixed(2));
}   
calculoGasolina();