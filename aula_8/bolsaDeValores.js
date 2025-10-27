//criar uma função que recebe por parametro o codigo da ação, o valor da ação a quantidade de ações que se deseja comprar e retornar o valor da compra.
//usar literais, o programa nao precisa de entradas
// fazer a chamada da função 3 vezes

function comprarAcao(codigoAcao, valorAcao, quantidadeAcoes) {
    var valorCompra = valorAcao * quantidadeAcoes;
    console.log("Compra realizada: " + quantidadeAcoes + " ações da " + codigoAcao + " ao valor de R$ " + valorAcao + " Total da compra: R$ " + valorCompra);
    return valorCompra;
}
comprarAcao("Apple", 150, 10);
comprarAcao("Google", 2800, 5);
comprarAcao("Amazon", 3400, 2);

