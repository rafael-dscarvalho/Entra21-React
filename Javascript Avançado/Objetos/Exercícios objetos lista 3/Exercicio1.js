let continuar = true
let opcao
let descricao = ""
let data = ''
let status = false
let tarefas = []

while (continuar == true){

    opcao = Number(prompt(`Digite a opção desejada: 1- Adicionar, 2- Concluir, 3- Remover, 0- Sair `))

    switch(opcao){

    case 1:

        descricao = prompt(`Digite a descrição: `)
        data = new Date (prompt(`Digite a data de criação: `)).toLocaleString()

        let objetoTarefa = {descricao, data, status}

        tarefas.push(objetoTarefa)

    break
    case 2:

        let descricaoParaConcluir = prompt("Qual tarefa deseja concluir?")
        let indiceParaConcluir = tarefas.findIndex(objetoTarefa => objetoTarefa.descricao == descricaoParaConcluir)

        if(indiceParaConcluir !== -1){

            tarefas[indiceParaConcluir].status = true

            alert("Tarefa concluida")

        } 
        else {

            alert("Tarefa nao encontrada")

        }

    break
    case 3:

        let descricaoParaRemover = prompt("Qual tarefa deseja concluir?")
        let indiceParaRemover = tarefas.findIndex(objetoTarefa => objetoTarefa.descricao == descricaoParaRemover)

        if(indiceParaRemover !== -1){

           delete  tarefas[indiceParaRemover]

            alert("Tarefa removida")

        } 
        else {

            alert("Tarefa nao encontrada")

        }

    break
    case 0:

        continuar = false

    break
    default:
        alert(`Opção inválida.`)
    }
}

console.log(tarefas)