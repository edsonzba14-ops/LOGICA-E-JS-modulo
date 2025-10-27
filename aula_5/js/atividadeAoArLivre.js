//ideal é a temperatura estar abaixo de 32 graus e não estar chovendo

    function atividadeAoArLivre() {
     var temperatura = prompt("qual a temperatura?");
     var chovendo = prompt("está chovendo? Responda true ou false");
    if (temperatura < 32 && chovendo === false) {
        alert("pode se divertir");
    } else{
        alert("fica em casa");
    }
}
atividadeAoArLivre()