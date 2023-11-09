//              0  1  2  3  4  5  6  7  8
let inteiros = [2, 3, 4, 5, 2, 3, 5, 5, 8]
let numeros = []
//              0             1           2            3            4
let nomes = ['Abigail', 'Astrogildo', 'Ursula,', 'Ermenegildo', 'Abigail']
let cores = []

// metodo push() adciona um elemento ao final do vetor
inteiros.push(10)

cores.push('Roxo')

alert(inteiros+ "\n"+ cores)

//metodo pop() remove o ultimo elemento do vetor
nomes.pop()
alert(nomes)
alert(nomes.length)

//metodo indexOf() retorna o indice da primeira vez que o elemento aparece
alert(nomes.indexOf('Abigail')) // 0

//metodo lastIndexOf() retorna o indice da ultima vez que o elemento aparece
alert(nomes.lastIndexOf('Abigail'))

//metodos includes() verifica e retorna true / false para um elemento
alert(nomes.includes('Astrogildo'))

//metodo splice() remove e/ou adiciona elementos em uma posição específica
vetor.splice(posição, quantidade a remover, valor1 a adicionar, valor2, valor3, ...)

let numbers = [2, 3, 4, 5, 2, 3, 5, 5, 8]

numeros.splice(4, 2, )
alert(numbers)

let numbers = [2, 3, 4, 5, 2, 3, 5, 5, 8]

numeros.splice(4, 2, )
alert(numbers)