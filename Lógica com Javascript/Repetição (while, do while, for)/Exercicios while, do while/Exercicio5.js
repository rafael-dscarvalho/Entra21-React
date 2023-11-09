let dia = 0
let nomeDia = "Segunda-feira"
let nomeCidade = ""
let menorTemperatura = 0
let maiorTemperatura = 0
let calculaAmplitude = 0
let amplitude1 = 0, amplitude2 = 0, amplitude3 = 0, amplitude4 = 0, amplitude5 = 0
let mediaAmplitudeSemanal = 0

nomeCidade = prompt("Digite o nome da cidade: ")

while(dia < 5){

    menorTemperatura = Number(prompt(`Digite a MENOR temperatura de ${nomeDia}: `))
    maiorTemperatura = Number(prompt(`Digite a MAIOR temperatura de ${nomeDia}: `))

    calculaAmplitude = maiorTemperatura - menorTemperatura

    if(dia == 0){
        amplitude1 = calculaAmplitude
        nomeDia = "Terça-feira"
    }
    else if(dia == 1){
        nomeDia = "Quarta-feira"
        amplitude2 = calculaAmplitude
    }
    else if(dia == 2){
        nomeDia = "Quinta-feira"
        amplitude3 = calculaAmplitude
    }
    else if(dia == 3){
        nomeDia = "Sexta-feira"
        amplitude4 = calculaAmplitude
    }
    else if(dia == 4){       
        amplitude5 = calculaAmplitude
    }

    dia++
}

    mediaAmplitudeSemanal = (amplitude1+amplitude2+amplitude3+amplitude4+amplitude5) / 5

    alert(`Segunda-feira: ${amplitude1} \nTerça-feira: ${amplitude2} \nQuarta-feira: ${amplitude3} \nQuinta feira: ${amplitude4} \nSexta-feira: ${amplitude5} \nMedia de amplitude semanal: ${mediaAmplitudeSemanal}`)