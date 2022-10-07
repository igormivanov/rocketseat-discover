/*

// function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/


function Person(name) {
    this.name = name // this se refere ao objeto igor ou ana
}
const igor = new Person("Igor") // criou um novo objeto
const ana = new Person("Ana")
console.log(igor)
console.log(ana)
