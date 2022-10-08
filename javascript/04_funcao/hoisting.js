// function hoisting

sayMyName()

function sayMyName(){
    console.log ('Igor')
}

// A função sofre elevação

const sayMyName = function (){
    console.log('Igor')
}

// Dessa forma a function não sofre hoisting dando erro