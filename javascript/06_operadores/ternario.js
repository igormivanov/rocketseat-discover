/*
    Operador Condicional (Ternário)
        
        * Dependendo da condição, nós receberemos valores diferentes
        // Condição então valor 1 se não valor 2
        // condition ? value1 : value2

*/
        let pao = true
        let queijo = true

        const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
        console.log(niceBreakfast)

        // Exemplo 2

        let age = 16
        const canDrive = age >= 18 ? 'can drive' : "can't drive"
        console.log(canDrive)