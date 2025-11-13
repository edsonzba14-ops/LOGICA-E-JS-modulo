function calçado() {
    var tenis = ["nike", "adidas", "puma", "vans", "allstar"];
    var procurarTenis = prompt("Qual sapato você está procurando? (nike, adidas, puma, vans, allstar)");
    var numero = tenis.indexOf(procurarTenis);
    if (numero !== -1) {
        alert("O sapato " + procurarTenis + " está na gaveta número " + (numero + 1));
    } else {
        alert("O sapato " + procurarTenis + " não está mais disponível.");
    }
}

calçado();