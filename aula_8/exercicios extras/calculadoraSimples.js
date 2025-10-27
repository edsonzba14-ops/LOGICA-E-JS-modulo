//Crie uma função calculadora(a, b, operacao) que:
//Recebe dois números e uma operação (+, -, *, /),
//Retorna o resultado conforme o operador escolhido,
//Retorna uma mensagem de erro se a operação for inválida.

function calculadora(a, b, operacao) {
    var resultado;
    switch (operacao) {
        case '+':
            resultado = a + b;
            break;
        case '-':
            resultado = a - b;
            break;
        case '*':
            resultado = a * b;
            break;
        case '/':
            if (b !== 0) {
                resultado = a / b;
            } else {
                return "Erro: Divisão por zero não é permitida.";
            }
            break;
        default:
            return "Erro: Operação inválida.";
    }
    return resultado;
}

console.log(calculadora(10, 5, '+'));
console.log(calculadora(10, 5, '-'));
console.log(calculadora(10, 5, '*'));
console.log(calculadora(10, 5, '/'));
console.log(calculadora(10, 0, '/'));
console.log(calculadora(1021, 4, '*'));


