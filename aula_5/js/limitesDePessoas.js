// numero de participantes max é 15
// alert se exceder 15

    function limiteDePessoas() {

    const participantes = prompt("quantos participantes existem dentro de sala?");
    if (participantes > 15) {
        alert("limite de pessoas excedido");
    } else {
        alert("pode entrar");
    }
}

limiteDePessoas()