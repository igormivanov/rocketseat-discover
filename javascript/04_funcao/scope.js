// function scope

let subject = 'create video'

function createThink(){
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink())
console.log(subject)


// function createThink(subject){
//     subject = 'study'
//     return subject
// }

// console.log(subject)
// console.log(createThink(subject))
// console.log(subject)