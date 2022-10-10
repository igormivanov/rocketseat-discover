/*
    Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima   -   A
    * entre 80 - 90     -   B
    * entre 70 - 79     -   C
    * entre 60 - 69     -   D
    * menor que 60      -   F

*/


function calcularNota(nota){

    let novaNota = '0'
    let scoreA = nota >= 90
    console.log(nota)
    console.log(scoreA)

    switch(nota){
        case scoreA: novaNota = 'A'
            break;
        case nota > 80 && nota < 91:
            novaNota = "B"
            break;
        case nota > 70 && nota < 80:
            novaNota = "C"
            break;
        case nota > 60 && nota < 70:
            novaNota = "D"
            break;
        case nota < 60:
            novaNota = "F"
            break;
        default:
            console.log("Digite um número válido")
            break;
    }
    console.log(novaNota)
    return novaNota
}

console.log(calcularNota(90))



/*

// Exemplo 2

function recalcularNota(nota){

    let novaNota

    if(nota >= 90){
        novaNota = 'A'
    } else if(nota >= 80 && nota < 90){
        novaNota = 'B'
    } else if(nota >= 70 && nota < 80){
        novaNota = 'C'
    } else if(nota >= 60 && nota < 70){
        novaNota = 'D'
    } else if(nota < 60){
        novaNota = 'F'
    } else {
        novaNota = "Nota inválida"
    }
    return novaNota
}

console.log(recalcularNota(59))


// Exemplo 2 plus

function recalcularNota(nota){

    let novaNota
    let notaExecelente = nota >= 90
    let notaMuitoBom = nota >= 80 && nota < 90
    let notaBom = nota >= 70 && nota < 80
    let notaRegular = nota >= 60 && nota < 70
    let notaRuim = nota < 60

    if(notaExecelente){
        novaNota = 'A'
    } else if(notaMuitoBom){
        novaNota = 'B'
    } else if(notaBom){
        novaNota = 'C'
    } else if(notaRegular){
        novaNota = 'D'
    } else if(notaRuim){
        novaNota = 'F'
    } else {
        notaNova = "Nota inválida"
    }
    return novaNota
}

console.log(recalcularNota(90))

*/