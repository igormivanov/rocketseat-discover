// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 10; i > 0; i--){
    if(i === 5) {
        continue; // nesse caso, quando o i for = 5, ele irá pular o console.log e continuar o loop
    }
    console.log(i)
}