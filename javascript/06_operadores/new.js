/*
    new

        * left-hand-side expression
        * criar um novo objeto

*/

        let name = new String('Igor')
        name.surName = "Ivanov"
        let age = new Number(23)
        console.log(name, age)

        let date = new Date('2020-12-01')
        console.log(date.__proto__)