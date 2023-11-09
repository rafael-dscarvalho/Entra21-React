
let areaPadrao = calcularArea(50,40)
let areaSobrado = calcularArea(30,40)
let areaMansao = calcularArea(100,100)
let areaComercial = calcularArea(40,40)


function calcularArea(largura, profundidade){
    let area = largura*profundidade
    return area
}

alert(`A área do terreno padrão é: ${areaPadrao}\nA área do terreno Sobrado é: ${areaSobrado}\nA área do terreno Mansão é: ${areaMansao}\nA área do terreno comercial é: ${areaComercial}`)