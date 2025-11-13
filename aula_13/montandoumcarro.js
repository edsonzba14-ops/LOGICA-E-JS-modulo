function montandoUmCarro() {
  class Carro {
    marca;
    modelo;
    ano;
    cor;
  }
    var carro1 = new Carro();
    carro1.marca = "Volkswagen";
    carro1.modelo = "Fusca";
    carro1.ano = 1980;
    carro1.cor = "Azul";
    console.log("Carro 1: " + carro1.marca + " " + carro1.modelo + " " + carro1.ano + " " + carro1.cor);

    var carro2 = new Carro();
    carro2.marca = "Chevrolet";
    carro2.modelo = "Chevette";
    carro2.ano = 1979;
    carro2.cor = "Vermelho";
    console.log("Carro 2: " + carro2.marca + " " + carro2.modelo + " " + carro2.ano + " " + carro2.cor);
}

montandoUmCarro();