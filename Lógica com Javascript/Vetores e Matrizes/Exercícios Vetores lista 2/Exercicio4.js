let vetor = []
let opcao = ""
let cadastrarNome = ""
let pesquisarNome = ""
let respostaPesquisa = ""
let excluirNome = ""
let indiceExcluir = 0
let editarNome = ""
let indiceEditar = 0
let editarNovoNome = ""

do {
    
opcao = Number(prompt("Qual opção você deseja (1, 2, 3, 4, 5, 0) ?"))

if (opcao == 1){

    cadastrarNome = prompt("Digite o nome a ser cadastrado: ")

    vetor.push(cadastrarNome)
}
 else if(opcao == 2){

    excluirNome = prompt("Qual nome você deseja excluir?")

    indiceExcluir = vetor.indexOf(excluirNome)
    vetor.splice(indiceExcluir, 1, )

    }
else if (opcao == 3){
    editarNome = prompt("Qual nome você deseja editar?")
    editarNovoNome = prompt("Digite o novo nome para substituir o antigo: ")

    indiceEditar = vetor.indexOf(editarNome)
    vetor.splice(indiceEditar, 1, editarNovoNome)
}
else if (opcao == 4){

    pesquisarNome = prompt("Qual nome você deseja pesquisar?")

    respostaPesquisa = vetor.includes(pesquisarNome)

    if (respostaPesquisa == true){
        alert("Nome cadastrado!")
    }
    else{
        alert("Nome não cadastrado!")
    }   
}
else if (opcao == 5){
    alert(vetor)
}
else if (opcao < 0 || opcao > 5) {
    alert("Opção inválida!")
}
}while (opcao != 0)
