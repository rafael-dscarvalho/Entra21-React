let elementoInput1 = document.getElementById("input1")
let elementoInput2 = document.getElementById("input2")
let calculaSoma
let calculaSubtracao
let calculaMultiplicacao
let calculaDivisao

function soma(){

    calculaSoma = Number(elementoInput1.value) + Number(elementoInput2.value)
    
    alert(`Soma: ${calculaSoma}`)
}

function subtracao(){

    calculaSubtracao = Number(elementoInput1.value) - Number(elementoInput2.value)

    alert(calculaSubtracao)
}

function multiplicacao(){

    calculaMultiplicacao = Number(elementoInput1.value) * Number(elementoInput2.value)

    alert(calculaMultiplicacao)
}

function divisao(){

    calculaDivisao = Number(elementoInput1.value) / Number(elementoInput2.value)

    alert(calculaDivisao)
}
