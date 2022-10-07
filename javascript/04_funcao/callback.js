// callback function 

function sayMyName(name) {
    console.log('antes de execultar a função callback')

    name()

    console.log('Depois de execultar o callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)

// A função sayMyName passa como argumento uma nova function