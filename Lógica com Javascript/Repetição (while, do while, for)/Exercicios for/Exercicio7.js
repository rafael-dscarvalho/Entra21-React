let altitudeEscaladaDia = 0
let somaAltitude = 0

for(let i=1;i < 9;i++){
    altitudeEscaladaDia = Number(prompt(`Qual foi a altitude escalada no ${i}º dia? `))

    somaAltitude += altitudeEscaladaDia

    if(somaAltitude >= 3488){

        alert(`Você chegou ao cume em ${i} dias!`)
        i = 9

    }

}

if(somaAltitude < 3488){
    alert("Você deve voltar, pois corre risco de ficar sem oxigênio.")
}