function ganhacamisaDoWhile() {
    var resposta;
    do {
        resposta = prompt("atenda");
        if (resposta != "tech4fm é show") {
            alert("resposta errada");
        }
    } while (resposta != "tech4fm é show");

    alert("você ganhou a camisa");
}
ganhacamisaDoWhile();


/* O usuário digita algo no prompt.

Se ele digitar qualquer coisa diferente de "tech4fm é show",
→ a condição resposta != "tech4fm é show" é verdadeira,
→ então o loop continua repetindo.

Quando o usuário finalmente digita exatamente "tech4fm é show",
→ a condição se torna falsa (porque agora não é diferente),
→ e o while para o loop. */

    