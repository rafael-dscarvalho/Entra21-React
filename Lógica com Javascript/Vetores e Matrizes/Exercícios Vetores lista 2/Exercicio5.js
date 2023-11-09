let vetor = []
let opcao = 0
let adicionarSabor = ""
let removerSabor = ""
let indiceRemover = 0
let nomeSabor = ""
let visualizarSabor = ""
let pedido = ""


do {
    
    opcao = Number(prompt("Qual opção você deseja 1- Adicionar sabor, 2- Remover sabor, 3- Visualizar sorvete, 4- Finalizar pedido"))

    if (opcao == 1){
    
        adicionarSabor = prompt("Qual sabor que deseja adicionar?")

        if(vetor.length < 4){

            vetor.push(adicionarSabor)
            alert(`Sabor adicionado!`)
        }
        else{
            alert(`Limite de sabores atingido, remova um sabor!`)
        }
    
    }
     else if(opcao == 2){
    
        removerSabor = prompt("Qual sabor deseja remover?")
    
        if(vetor.length > 0){

            indiceRemover = vetor.indexOf(removerSabor)
            vetor.splice(indiceRemover, 1, )

            alert(`Sabor removido!`)
        }
        else{
            alert(`Não existem sabores adicionados!`)
        }
    
        }
    else if (opcao == 3){

        if(vetor.length > 0){
            for(let i=0;i <4;i++){
                nomeSabor = vetor[i]
                visualizarSabor += (`Camada ${i+1}: ${nomeSabor}\n`)
        }
            alert(visualizarSabor)
        }
        else{
            alert(`Seu sorvete não possui sabores!`)
        }
        visualizarSabor = ""
    }
    else if (opcao == 4){
    
        if(vetor.length > 0){
            alert(`Pedido realizado!`)
            pedido = "realizado"
        }
        else{
            alert(`Adicione pelo menos um sabor!`)
        }
    }
    else{
        alert("Opção inválida!")
    }
    
    }while (pedido != "realizado")