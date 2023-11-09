let numeroLista = []
let listaImpar = []
let somaImpar = 0

for(i=1; i < 6;i++){

    numero = Number(prompt(`Digite o ${i}º número: `))

    numeroLista.push(numero)
}

for(i=0; i < numeroLista.length;i++){

    if(numeroLista[i] % 2 == 1 ){
        listaImpar.push(numeroLista[i])
        somaImpar = somaImpar + numeroLista[i]
    }
}

alert(listaImpar + "\n" + somaImpar)