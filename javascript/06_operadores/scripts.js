/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary


let number = 1
console.log(number + 1) // Binary
console.log(++number) // Unary
console.log(false ? 'alo' : 'nada') // ternary



/* 
    new

        * left-hand-side expression
        * criar um novo objeto


        let name = new String('Igor')
        name.surName = "Ivanov"
        let age = new Number(23)
        console.log(name, age)

        let date = new Date('2020-12-01')
        console.log(date.__proto__)

    

    Operadores unitários

        * typeof
        * delete
        
        const person = {
        name: 'Igor',
        age: 21,
        }
        delete person.age

        console.log(person)
        
    

    Operadores Aritiméticos

        * Multiplicação     console.log(3.2 * 5.5)
        * Divisão           console.og(12 / 2)
        * Soma              console.log(34 + 67)
        * Subtração         console.log(34 - 23)
        * resto da divisão  console.log(11 % 10)
        * incremento        console.log(i++)
        * decrepemento      console.log(i--)
        * exponencial       console.log(2 ** 4)
    


    Grouping operator ( )
        
        let total = (2 + 3) * 5
        console.log(total)

    
    
    Operadores de comparação 
        
        * Irá comparar valores e retornar um Boolean como resposta

        let one = 1
        let two = 2

        // ==   igual a
        console.log( two == 1 ) // False
        console.logo( one == "1") // True


        // ===  estritamente igual a ( Igual no valor e no tipo )
        console.log( one === "1" ) // False
        console.log( one === 1 ) // True


        // !==  stritamente igual a (Igual no valor e no tipo )
        console.log( two !== "2" ) // True
        console.log( two !== 2 ) // False


        // !=   diferente de
        console.log( one != two ) // True
        console.log( one != 1 ) // False
        console.log( one != "1" ) // False


        * Maior e menor igual 

        // >    Maior que
        console.log( one > two ) // False

        // >=   Maior igual a
        console.log( one >= 1 ) // True
        console.log( two >= 1 ) // True

        // <    Menor que
        console.log( one < two ) // True
        
        // <=   Menor igual a
        console.log( one <= two ) // True
        console.log( one <= 1 ) // True
        console.log( one <= 0 ) // False

    

    Operadores de atribuição ( Assignment )
        
        let x

        // assignment
            x = 1
        
        // addition assignment
            x += 2

        // subtraction assignment
            x -= 1
        
        // multiplication assignment
            x *= 2
        
        // division assignment
            x /= 2
        
        // remainder, exponetiation
            x *= 2
    


    Operadores lógicos (logical operators)

        * 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

        let pao = true
        let queijo = true

        // AND &&
        console.log(pao && queijo) 

        // OR ||
        console.log(pao || queijo)

        // NOT !
        console.log(!pao)



    Operador Condicional (Ternário)
        
        * Dependendo da condição, nós receberemos valores diferentes
        // Condição então valor 1 se não valor 2
        // condition ? value1 : value2

        let pao = true
        let queijo = true

        const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
        console.log(niceBreakfast)

        // Exemplo 2

        let age = 16
        const canDrive = age >= 18 ? 'can drive' : "can't drive"
        console.log(canDrive)



    Falsy e Truthy
        
        FALSY
        Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops)

        * false
        * 0
        * -0
        * ""
        * null
        * undefined
        * NaN
        * 
        

        TRUTHY
        Quaando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops)

        * true
        * {}
        * []
        * 1
        * 3.23
        * "0"
        * "false"
        * -1
        * infinity
        * -infinity
        


    Operator precedence
        
        * grouping                      ( )
        * negação e incremento          ! ++ --
        * multiplicação e divisão       * /
        * adição e subtração            + -
        * relacional                    < <= > >=c
        * igualdade                     == != === !==
        * AND                           &&
        * OR                            ||
        * condicional                   ?:
        * assignment                    = += -= *= %=
        * /
*/      
