// Coleta o que o usuário é:

    // Exec1
    let nota = parseInt(prompt("Minha nota é: "))

console.log(nota >=7? "APROVADO":nota>=5 && nota<7?"RECUPERAÇÃO":nota<5?"REPROVADO":"QUE NOTA É ESSA?")
console.log("----------------------------------------------------------------------------")
//EXEC 2
    let mes = parseInt(prompt("O mês é: "))

    let myMes = null;
    switch(mes){
        case 1:
            myMes = "JANEIRO"
            break
        case 2:
            myMes ="FEVEREIRO"
        case 3:
            myMes = "MARÇO"
        case 4: 
        myMes = "ABRIL"
        case 5:
            myMes = "MAIO"
        case 6:
            myMes = "JUNHO"
        case 7:
            myMes ="JULHO"
        case 8 :
            myMes ="AGOSTO"
        case 9 : 
        myMes = "SETEMBRO"
        case 10:
            myMes ="OUTUBRO"
        case 11:
            myMes = "NOVEMBRO"
        case 12:
            myMes ="DEZEMBRO"


    }
    window.alert("você está em: " + myMes)
    console.log("-------------------------------------------------------------------------------------------")

    let myRoles = {
        ADMIN:"ADMIN",
        VISITANTE:"VISITANTE",
        USUARIO:"USUARIO"}

    let iamRole = prompt("Você se enquadra em qual regra: ").toUpperCase()




    switch(iamRole.toUpperCase()){
        case "ADMIN":
            window.alert("LOGADO: "+ myRoles.ADMIN)
            break;
        case "VISITANTE":
            window.alert("LOGADO: "+ myRoles.VISITANTE)
            break;
        case "USUARIO":
            window.alert("LOGADO:" + myRoles.USUARIO)
            break;
        default:
            window.alert("acesso negado!")
    }
    console.log("------------------------------------------------//----------------------")
