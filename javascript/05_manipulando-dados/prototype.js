/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__

    Console:

    "Igor".__proto__
    23.0.__proto__
    "igor".lenght

    type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

    console.log('9' + 5) força o 5 de number para string pela Type coersion

    console.log(Number('9') + 5) alteramos manualmente - Type conversion



    // Manipulando String e Números

    // Transformar String em Número e Número em String

        let string = "123"
        console.log(Number(string))
        let number = 321
        onsole.log(String(number))



    // Contar quantos caracteres te uma palavra e quantos dígitos tem um número

        let word = "Paralelepipedo"
        console.log(word.length)
        let number = 1234
        console.log(String(number).length) // Number não é possível utilizar .length, portanto transforme em string
    
    

    // Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

        let number = 345.33452345
        console.log(number.toFixed(2).replace(".", ","))
        // toFixed() -> número de casas após o ponto
        // replace() -> Trocar por exemplo ponto por virgula



    // Transformar letras minúsculas em maiúsculas. Faça o contrário disso também

        let word = "Programar é muito bacana!"
        console.log(word.toUpperCase()) // ou toLowerCase()



    // Separe um texto que contem espaços, em um novvo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

        let phrase = "Eu quero viver o Amor!"
        let myArray = phrase.split(" ")
        let phraseWithUnderscore = myArray.join("_")
        console.log(phraseWithUnderscore)



    // Verificar se o texto contém a palavra Amor

        let phrase = "Eu quero viver o Amor!"
        console.log(phrase.includes("Amor"))



    // Criar Array com construtor

        // let myArray = ['a', 'b', 'c']
        // console.log(myArray)

        let myArray = new Array('a', 'b', 'c')
        console.log(myArray)



    // Contar elementos de um array 

        console.log(["a", "b", "c"].length)



    // Transformar uma cadeia de caracteres em elementos de um array

        let word = "manipulação"
        console.log(Array.from(word))



    let techs = ["html", "css", "js"]

    // adicionar um item no fim
        techs.push("nodejs")

    // adicionar no começo
        techs.unshift("sql")

    // remover do fim
        techs.pop()

    // remover do começo
        techs.shift()

    // pegar somente alguns elementos do array
        //console.log(techs.slice(1, 2))

    // remover 1 ou mais items em qualquer posição do array
        //techs.splice(1, 3)
        
    // encontrar a posição de um elemento no array
        let index = techs.indexOf('css')

    techs.splice(index, 1)
    console.log(techs)
    console.log(index)

*/