let numeroDigitado
let vetorPar = []
let vetorImpar = []

for(let i=0;i<10;i++){

    numeroDigitado = Number(prompt(`Digito o ${i+1} número de inscrição: `))

        if(numeroDigitado % 2 == 0){

            vetorPar.push(numeroDigitado)
        }
        else{
            vetorImparr.push(numeroDigitado)
        }
}

let verificaTamanhoPar = vetorPar.every(function(){

})