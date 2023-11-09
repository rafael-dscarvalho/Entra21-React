
let elementoInputNome1 = document.getElementById("inputNome1")
let elementoInputNome2 = document.getElementById("inputNome2")
let elementoInputNome3 = document.getElementById("inputNome3")
let elementoInputNome4 = document.getElementById("inputNome4")
let elementoInputNome5 = document.getElementById("inputNome5")
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


function calculaProjeto(){

  let calculaProjeto1 = Number(elementoInputValor1.value) * Number(elementoInputQtd1.value) 
  let calculaProjeto2 = Number(elementoInputValor2.value) * Number(elementoInputQtd2.value) 
  let calculaProjeto3 = Number(elementoInputValor3.value) * Number(elementoInputQtd3.value)
  let calculaProjeto4 = Number(elementoInputValor4.value) * Number(elementoInputQtd4.value)
  let calculaProjeto5 = Number(elementoInputValor5.value) * Number(elementoInputQtd5.value)

  let calculaTotal = calculaProjeto1 + calculaProjeto2 + calculaProjeto3 + calculaProjeto4 + calculaProjeto5

  alert(`${elementoInputNome1.value}: R$ ${calculaProjeto1}\n${elementoInputNome2.value}: R$ ${calculaProjeto2}\n${elementoInputNome3.value}: R$ ${calculaProjeto3}\n${elementoInputNome4.value}: R$ ${calculaProjeto4}\n${elementoInputNome5.value}: R$ ${calculaProjeto5}\nValor Total dos Projetos: R$ ${calculaTotal}`)
    
}
