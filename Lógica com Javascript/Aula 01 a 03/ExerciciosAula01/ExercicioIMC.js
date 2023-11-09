let peso = parseFloat(window.prompt("Digite seu peso quilogramas")) 
let altura = parseFloat(window.prompt("Digite a sua altura em metros"))
let imc = peso / (altura * altura)

console.log("Seu IMC é: " + imc.toFixed(0))

