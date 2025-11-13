class Carro {
  constructor(marca, modelo, ano, cor, placa, ligado) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.placa = placa;
    this.ligado = ligado;
  }
}

var carros = [];

function listaClass() {
  var fusca = new Carro(
    "Volkswagen",
    "Fusca",
    1978,
    "Azul calcinha",
    "ABC-1234",
    false
  );
  var opala = new Carro(
    "Chevrolet",
    "Opala",
    1976,
    "Amarelo",
    "ABC-1298",
    false
  );
  var golQuadrado = new Carro(
    "Volkswagen",
    "Gol Quadrado",
    1994,
    "Branco",
    "ABC-4321",
    false
  );

  var uno = new Carro("Fiat", "Uno", 2010, "Vermelho", "CBA-1234", true);
  var hilux = new Carro("Toyota", "Hilux", 2022, "Preto", "ABC-1357", false);

  carros.push(fusca);
  carros.push(opala);
  carros.push(golQuadrado);
  carros.push(uno);
  carros.push(hilux);
}

listaClass();
console.log(carros);
