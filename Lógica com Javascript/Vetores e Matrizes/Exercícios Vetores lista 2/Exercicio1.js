let vetor = []
let numeroDigitado = 0

for(let i=1;i<7;i++){
    numeroDigitado = Number(prompt(`Digite o ${i} número a ser adicionado no vetor: `))
    vetor.push(numeroDigitado)
}

if((vetor[0] == vetor[5])&&(vetor[1] == vetor[4])&&(vetor[2] == vetor[3])){
    alert(`É palíndromo!`)
}
else{
    alert(`Não é palíndromo!`)
}