/*
    Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    
    * receitas: []
    * despesas: []

    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com o saldo positivo ou negativo, seguido do valor do saldo

*/

let familly = {
    expenses: [energia = 130, agua = 45, comida = 300, aluguel = 1070, transporte = 100, internet = 100],
    incomes: [estagio = 1200, freelancer = 200, mesada = 2000]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateIncomes = sum(familly.incomes)
    const calculateExpenses = sum(familly.expenses)

    const total =  calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "Negativo"
    
    if(itsOk){
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()