let nomeEspecie
let populacaoEspecie

nomeEspecie = prompt("Digite o nome da espécie")
populacaoEspecie = Number(prompt("Digite a população da espécie"))

if(populacaoEspecie >= 200 && populacaoEspecie < 500){
      alert("Espécie criticamente em perigo")
}
if(populacaoEspecie >= 500 && populacaoEspecie < 1000 ){
      alert("Espécie em perigo")
}
if(populacaoEspecie >= 1000 && populacaoEspecie <= 5000){
     alert("Espécie vulnerável!")
}
else{
    alert("Número inválido")
}