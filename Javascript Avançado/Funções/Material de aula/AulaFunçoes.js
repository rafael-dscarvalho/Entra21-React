// function somarSemParametros(){
 
//   let numero1 = 5
//   let numero2 = 4
//   let soma  = numero1+numero2
//   console.log(soma)
//   return soma
// }

// let resultado = somarSemParametros()
// console.log(resultado)


// function somarComParametros(numeroUm = 0, numeroDois = 0){

// let somarParametros = numeroUm+numeroDois
// // console.log(somarParametros)
// return "O resultado è: "+somarParametros
// }

// let resultado2 = somarComParametros(4)
// console.log(resultado2)

// somarComParametros(4, 5)
// somarComParametros(1, 2)
// somarComParametros(5, 4)
// somarComParametros(7, 8)

let base = Number(prompt("Qual é a base do triângulo?"))
let altura = Number(prompt("Qual é a altura do triângulo?"))
let area = calcularArea(base, altura)
let area2 = calcularArea(pegarNumero(), 8) + 5

console.log(area)
console.log(area2)

function pegarNumero(){
  return 10
}

function calcularArea(base, altura){
   return (base*altura) / 2
}