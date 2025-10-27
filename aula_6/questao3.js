//setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente: As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira e as pessoas com nome iniciado em consoante, na terça-feira
//Funções de texto para copiar a primeira letra e em maiúsculas.
//No seletor if faça a comparação das vogais.

function separarCandidatos() {
    var nomeCandidato = "Pedro";
    var primeiraLetra = nomeCandidato.charAt(0).toUpperCase();
    if(primeiraLetra === 'A' || primeiraLetra === 'E' || primeiraLetra === 'I' || primeiraLetra === 'O' || primeiraLetra === 'U') {
        console.log("O candidato " + nomeCandidato + " será entrevistado na segunda-feira.");
    } else {
        console.log("O candidato " + nomeCandidato + " será entrevistado na terça-feira.");
    }
}
separarCandidatos();