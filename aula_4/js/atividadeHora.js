function verificarBoaTarde(){
    const hora = prompt("Digite a hora atual:");
    const boaTarde = hora >= 12 && hora <= 18;

    console.log("hora digitada:" + hora);
    console.log("Posso desejar boa tarde?" + boaTarde);
}
verificarBoaTarde();