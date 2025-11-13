function carrosCor(carros) {
  var totalPorCor = {};
  for (var i = 0; i < carros.length; i++) {
    var cor = carros[i].cor;
    if (totalPorCor[cor] === undefined) {
      totalPorCor[cor] = 1;
    } else {
      totalPorCor[cor] = totalPorCor[cor] + 1;
    }
  }
  return totalPorCor;
}

var listaDeCarros = [
  { modelo: "Ford", cor: "vermelho" },
  { modelo: "Chevrolet", cor: "azul" },
  { modelo: "Toyota", cor: "vermelho" },
  { modelo: "Honda", cor: "preto" },
  { modelo: "Volkswagen", cor: "magenta" },
];

var resultado = carrosCor(listaDeCarros);
console.log(resultado);
