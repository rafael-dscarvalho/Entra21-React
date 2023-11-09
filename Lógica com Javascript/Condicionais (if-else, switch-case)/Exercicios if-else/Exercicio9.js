let hab
let km
let densidade

hab = Number(prompt("Digite a quantidade de habitantes"))
km = Number(prompt("Digite a quilometragem"))

densidade = hab/km

if(densidade >= 100){
    alert("Densidade alta")
}
else if(densidade >= 25 && densidade < 100){
    alert("Densidade média")
}
else if(densidade < 25){
    alert("Densidade baixa")
}
else{
    alert("Inválido")
}