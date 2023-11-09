
let elementoInputNota1 = document.getElementById("inputNota1")
let elementoInputNota2 = document.getElementById("inputNota2")
let elementoInputNota3 = document.getElementById("inputNota3")
let elementoInputPeso1 = document.getElementById("inputPeso1")
let elementoInputPeso2 = document.getElementById("inputPeso2")
let elementoInputPeso3 = document.getElementById("inputPeso3")
let calculaMedia

function CalcularMediaPonderada(){
   
calculaMedia = ((Number(elementoInputNota1.value) * Number(elementoInputPeso1.value)) + (Number(elementoInputNota2.value) * Number(elementoInputPeso2.value)) + (Number(elementoInputNota3.value) * Number(elementoInputPeso3.value))) / (Number(elementoInputPeso1.value) + Number(elementoInputPeso2.value) + Number(elementoInputPeso3.value))


alert(`Média final:   ${calculaMedia}`)

}