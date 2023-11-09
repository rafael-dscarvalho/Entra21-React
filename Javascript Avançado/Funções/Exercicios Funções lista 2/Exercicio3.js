let vetor = [1, 3, 3, 5, 5, 7, 7, 7, 9, 9]

let verificaImpar = vetor.every(function(valorAtual){

    return valorAtual % 2 == 1
})

if(verificaImpar == true){

    alert(`Todos os elementos do array são ímpares!`)
}

else{

    alert(`Nem todos elementos do array são ímpares!`)
}


let multiplicaVetor = vetor.map(function(valorAtual){

    return valorAtual * valorAtual
})

alert(multiplicaVetor)