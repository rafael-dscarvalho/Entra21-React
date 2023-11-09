let salarioAnual
let pisoMensal
let salarioMensal

salarioAnual = Number(prompt("Digite seu salário Anual"))
pisoMensal = Number(prompt("Digite seu piso mensal"))

salarioMensal = salarioAnual / 12

if(salarioMensal >= pisoMensal){
     alert("Você recebe de acordo com seu piso!")
}
else{
    alert("Você não recebe de acordo com seu piso!")
}