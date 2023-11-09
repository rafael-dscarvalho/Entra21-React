let numeroLista = []
let numero = 0
let somaPrimeiros = 0
let somaUltimos = 0
let resultado = 0

for(i=1; i < 11;i++){

numero = Number(prompt(`Digite o ${i}º número: `))

numeroLista.push(numero)
}

for(i=0; i < numeroLista.length;i++){

    if (i < 5){
        somaPrimeiros = somaPrimeiros + numeroLista[i]
    }
    else{
        somaUltimos = somaUltimos + numeroLista[i]
    }
}

resultado = somaPrimeiros - somaUltimos

alert(resultado)