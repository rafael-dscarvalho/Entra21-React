let tempoTotalProjeto = Number(prompt ("Digite o número total do projeto em dias: "));
let periodoSprint = Number(prompt("Digite o período de tempo de cada sprint: "))

let mediaSprint = Math.floor( tempoTotalProjeto / periodoSprint); 


alert(`Teremos ${mediaSprint} sprint(s)`)

let contador = 0;

while (contador < mediaSprint) {

let tituloProjeto = prompt("Cadastre o titulo do projeto:")
let objetivoProjeto = prompt("Cadastre o objetivo do projeto:")

contador ++

alert(`O tempo total do projeto foi estimado em ${tempoTotalProjeto} dias
Cada sprint terá ${periodoSprint} dias
Teremos na sprint ${contador}:
    O título = ${tituloProjeto}
    O objetivo = ${objetivoProjeto} `)

}