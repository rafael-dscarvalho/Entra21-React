let elementoInputValor1 = document.getElementById("inputValor1")
let elementoInputValor2 = document.getElementById("inputValor2")
let elementoInputValor3 = document.getElementById("inputValor3")
let elementoInputValor4 = document.getElementById("inputValor4")
let elementoInputValor5 = document.getElementById("inputValor5")
let elementoInputQtd1 = document.getElementById("inputQtd1")
let elementoInputQtd2 = document.getElementById("inputQtd2")
let elementoInputQtd3 = document.getElementById("inputQtd3")
let elementoInputQtd4 = document.getElementById("inputQtd4")
let elementoInputQtd5 = document.getElementById("inputQtd5")
let elementoInputDesconto = document.getElementById("inputDesconto")


function calculaCompras(){

  let calculaSemDesconto = (Number(elementoInputValor1.value) * Number(elementoInputQtd1.value)) + (Number(elementoInputValor2.value) * Number(elementoInputQtd2.value)) + (Number(elementoInputValor3.value) * Number(elementoInputQtd3.value)) + (Number(elementoInputValor4.value) * Number(elementoInputQtd4.value))


  let calculaComDesconto = (calculaSemDesconto * elementoInputDesconto.value) / 100

  alert(`Total da compra com sem desconto: R$ ${calculaSemDesconto}\nTotal da compra COM desconto: R$ ${calculaComDesconto}`)
    
}
