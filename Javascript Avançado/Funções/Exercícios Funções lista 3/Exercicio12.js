vetorPrecos = [10, 55, 50, 5, 14, 79, 100, 13, 94, 95, 6]

filtrarVetorPrecos = vetorPrecos.filter(valorAtual => valorAtual < 50)

console.table(filtrarVetorPrecos)