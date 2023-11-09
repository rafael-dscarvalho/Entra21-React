let numero1Prompt = Number(prompt("Digitar o primeiro número: "))
let numero2Prompt = Number(prompt("Digitar o segundo número: "))
let numero3Prompt = Number(prompt("Digitar o terceiro número: "))

let resultadoSoma = somarNumeros(numero1Prompt, numero2Prompt, numero3Prompt)
let resultadoMedia = mediaNumeros(resultadoSoma)

alert(`A media dos números é: ${resultadoMedia} `)

function somarNumeros(numero1, numero2, numero3){
    let soma = numero1Prompt+numero2Prompt+numero3Prompt
    return soma
}

function mediaNumeros(resultadoSoma){
    let media = resultadoSoma / 3
    return media
}