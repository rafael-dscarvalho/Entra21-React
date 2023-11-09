let pontos = 0
let somaPontos = 0
let percentual = 0

for(let i=1;i<7;i++){

    pontos = Number(prompt(`Digite os pontos do ${i}º arremeso: `))

    while(pontos < 0 || pontos > 10){
        alert("Número inválido! digite um valor de 0 a 10.")
        pontos = Number(prompt(`Digite os pontos do ${i}º arremeso: `))
    }

    somaPontos += pontos
}

    percentual = (somaPontos / 60)*100

if(percentual >= 75){
    alert(`Pontuação: ${somaPontos}\nPercentual: ${percentual.toFixed(0)}%\nVocê está classificado!`)
}
else if(percentual >= 50 && percentual < 75){
    alert(`Pontuação: ${somaPontos}\nPercentual: ${percentual.toFixed(0)}%\nVocê está na repescagem.`)
}
else{
    alert(`Pontuação: ${somaPontos}\nPercentual: ${percentual.toFixed(0)}%\nVocê foi desclassificado.`)
}