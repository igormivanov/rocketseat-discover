// for...in

let person = {
    name: 'Igor',
    age: 21,
    weight: 80.5
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}