// item 1
const dados = fs.readFileSync("aula.txt", "utf-8")
console.log(dados)

// item 2
// Capturar texto pelo terminal
const texto = readlineSync.question("Qual texto voce deseja adicionar?")
// Capturar conteudo de um arquivo
let textoAntigo = fs.readFileSync("aula.txt", "utf-8")
// Juntar o conteudo com o texto
const novoTexto = textoAntigo + "\n" + texto
// Sobrescrever o conteudo do arquivo
fs.writeFileSync("aula.txt", novoTexto)


// item 3
const nome = readlineSync.question("Qual e o nome do arquivo procurado?")
if(fs.existsSync(`./nova_pasta/${nome}`)){
    console.log("O arquivo existe")
} else {
    console.log("O arquivo não existe")
}

// item 4
fs.readdir(".", (erro, arquivos) => {
    if(erro){
        console.log("Ocorreu um erro")
    } else {
        // console.log("Os arquivos da pasta são:", arquivos)
        const texto = arquivos.map((item, indice) => {
            return `O arquivo ${indice + 1} é ${item}`
        })
        console.log(texto.join("\n"))
    }
})