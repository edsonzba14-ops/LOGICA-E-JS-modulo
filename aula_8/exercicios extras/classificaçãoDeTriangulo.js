//Crie uma função tipo_triangulo(a, b, c) que:
//Verifica se os lados formam um triângulo,
//Retorna:
//"Equilátero" se todos os lados iguais,
//"Isósceles" se dois lados iguais,
//"Escaleno" se todos diferentes,
//"Não é triângulo" caso contrário.

function tipo_triangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Equilátero";
        } else if (a === b || a === c || b === c) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    } else {
        return "Não é triângulo";
    }

    
}
console.log(tipo_triangulo(3, 3, 3));
console.log(tipo_triangulo(3, 4, 3));
console.log(tipo_triangulo(3, 4, 5));
console.log(tipo_triangulo(1, 2, 3));
























































