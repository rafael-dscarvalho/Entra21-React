let altura
let peso
let imc

altura = Number(prompt("Digite sua altura"))
peso = Number(prompt("Digite sseu peso"))

imc = peso / (altura*altura)

if (imc < 18){
    alert("Abaixo do peso")
}
else if (imc >= 18 && imc <= 25){
    alert("Peso ideal")
}
else{
    alert("Acima do peso")
}
