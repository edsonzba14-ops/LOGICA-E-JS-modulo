// a escola de programação aumentou a correção de avaliações, permitinjdo lançar todas as notas da turma no sistem.
// o sistema debera exibir um relatorio de notas
// a maior nota
//a quantidade de alunos abaixo da media 7
// sem infinity

const notas = [8, 5, 10, 3, 7, 6, 9, 4, 2, 1];

function relatorioDeNotas(notas) {
  var maiorNota = 0;
  var quantidadeAbaixoDaMedia = 0;
  const media = 7;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i] > maiorNota) {
            maiorNota = notas[i];
        }
        if (notas[i] < media) {
            quantidadeAbaixoDaMedia++;
        }
    }
    return {
        maiorNota: maiorNota,
        quantidadeAbaixoDaMedia: quantidadeAbaixoDaMedia
    };
}




const resultado = relatorioDeNotas(notas);
console.log("Maior nota:" + resultado.maiorNota);
console.log("Quantidade de alunos abaixo da média:" + resultado.quantidadeAbaixoDaMedia);
