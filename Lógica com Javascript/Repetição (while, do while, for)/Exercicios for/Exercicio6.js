let moedaDigitada = 99
let moeda1 = 0, moeda5 = 0, moeda10 = 0, moeda25 = 0, moeda50 = 0
let totalAcumulado = 0

for(let i=0;moedaDigitada != 0;i++){

    moedaDigitada = Number(prompt("Digite qual moeda você deseja inserir no cofre 1/5/10/25/50 centavos. ou digite 0 para sair."))

    if(moedaDigitada == 1){
        moeda1++
    }
    else if(moedaDigitada == 5){
        moeda5++
    }
    else if(moedaDigitada == 10){
        moeda10++
    }
    else if(moedaDigitada == 25){
        moeda25++  
    }
    else if(moedaDigitada == 50){
        moeda50++
    }
    else if(moedaDigitada != 0 && moedaDigitada != 1 && moedaDigitada != 5 && moedaDigitada != 10 && moedaDigitada != 25 && moedaDigitada != 50){
        alert(`Moeda inválida!`)
    }
}

totalAcumulado = (moeda1*0.01) + (moeda5*0.05) + (moeda10*0.1) + (moeda25*0.25) + (moeda50*0.50)

alert(`Quantidade de moedas: \n1 centavo: ${moeda1}\n5 centavos: ${moeda5}\n10 centavos: ${moeda10}\n25 centavos: ${moeda25}\n50 centavos: ${moeda50}\nTotal acumulado: R$ ${totalAcumulado}`)