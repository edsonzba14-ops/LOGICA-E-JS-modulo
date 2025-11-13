var a = 7;

function nome(a) {
    a = a + 5;
    console.log("Parametro" , a);
}

nome(a);
console.log("Variavel" , a);  

///////////////////////////////////

const nomesArray = ["Ana", "Ju", "Leo", "Paula"];   

function nomes(nome){
    nome[1] = "Fada do Dente"

    console.log(nome);

}

nomes(nomesArray)
console.log(nomesArray);
