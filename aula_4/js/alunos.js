function alunos(){
    const totalAlunos = 24;    
    const alunosPresentes = prompt("Digite o número de alunos presentes:");

    var respostaAlunos = alunosPresentes >= 13;
    console.log ("O total de alunos é:" + totalAlunos);
    console.log ("O Número de alunos presentes é:" + alunosPresentes);

    console.log ("A maioria dos alunos está presente?" + respostaAlunos);
}
alunos();
