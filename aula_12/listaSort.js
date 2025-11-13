function lista() {
    const nomesOriginal = ['Ana', 'Marcos', 'Maria', 'João'];

    console.log("Lista original:", nomesOriginal);

    const nomesCopia = [nomesOriginal.slice()];

    nomesCopia.sort();

    console.log("Original depois do sort:", nomesOriginal);
    console.log("Cópia ordenada:", nomesCopia);
}

lista();
