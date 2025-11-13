function data() {
  var hoje = new Date();
  {
    console.log(hoje);
    console.log(hoje.toString());
    console.log(hoje.toISOString());
    console.log(hoje.toLocaleString());
    console.log(hoje.toLocaleDateString());
  }

  var dataFormatada = {
    dd: hoje.getDate(),
    mm: hoje.getMonth(),
    aaaa: hoje.getFullYear(),
  };

  console.log(dataFormatada);

  var mesLongo = hoje.toLocaleDateString("pt-BR", { month: "long" });
  var mesCurto = hoje.toLocaleDateString("pt-BR", { month: "short" });

  console.log(mesCurto);
  console.log(mesLongo);


  
}

data();
