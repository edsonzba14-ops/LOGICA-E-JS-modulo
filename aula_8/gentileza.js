function saudacao(horario){
    if(horario === "dia"){
        console.log("bom dia");
    }else if(horario === "tarde"){
        console.log("boa tarde");
    }else if(horario === "noite"){
        console.log("boa noite");
    }
}

saudacao(horario = "noite");