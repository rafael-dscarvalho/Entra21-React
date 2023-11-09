let areaTriangulo = calcularAreaTriangulo(20, 20)

function calcularArea(largura, profundidade){
    let area = largura*profundidade
    return area
}

function calcularAreaTriangulo(base, altura){
    let areaTriangular = calcularArea(base, altura) / 2
    return areaTriangular
}

alert(`Área do triângulo: ${areaTriangulo}`)