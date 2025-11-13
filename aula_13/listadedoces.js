// vamos criar uma lista de doces com alguns preenchidos. Com duas variáveis apontando para a mesma lista na memoria , vamos modifical e adicionar alguns elementos

function listaDoces() {
  var doces = ["Brigadeiro", "Beijinho", "Cajuzinho"];
  var addDoces = doces;

  console.log("Lista de Doces Original: " + doces);

  addDoces.push("Quebra Queixo");
  addDoces.push("Pé de Moleque");

  console.log("Lista de Doces Modificada: " + addDoces);
}

listaDoces();
