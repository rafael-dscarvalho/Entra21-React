let vetorCidade = ["bruxelas", "berlim", "praga", "viena", "budapeste"]
let vetorDistancias = [
    [0, 764, 764 + 350, 764 + 350 + 292, 764 + 350 + 292 + 242],
    [764, 0, 350, 350 + 292, 350 + 292 + 242],
    [764 + 350, 350, 0, 292, 292 + 242],
    [764 + 350 + 292, 350 + 292, 292, 0, 242],
    [764 + 350 + 292 + 242, 350 + 292 + 242, 292 + 242, 242, 0]
  ]

let partida = prompt("Digite o nome da cidade de partida: ")

let destino = prompt("Digite o nome da cidade de destino: ")

let indexPartida = vetorCidade.indexOf(partida)

let indexDestino = vetorCidade.indexOf(destino)

let calcularDistancia = vetorDistancias[indexPartida][indexDestino]

console.log(calcularDistancia)
