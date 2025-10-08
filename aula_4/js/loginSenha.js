// Resposta no console true e false
// Senha = abc123
// SenhaUsuario ?


function login(){
    const senha = "abc123";
    const senhaUsuario = prompt("Digite a sua senha:");
    var resultadoSenha = senha === senhaUsuario;

    console.log(resultadoSenha);
}

login();