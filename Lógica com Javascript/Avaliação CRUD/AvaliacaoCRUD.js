let vetorMarca = []
let vetorNome = []
let vetorValor = []
let opcao 
let crud = ""
let cadastrarMarca = ""
let cadastrarNome = ""
let cadastrarValor = 0
let excluirProduto = ""
let indiceExcluir = 0
let editarNome = ""
let editarNovoNome = ""
let editarNovaMarca = ""
let editarNovoValor = ""
let indiceEditar = 0
let mensagemLista= ""
let pesquisarProduto = false


alert(`Bem vindo ao banco de dados de produtos! Escolha através do menu a seguir qual opção você deseja realizar`)


do {
    
    opcao = Number(prompt(`1- Cadastrar produto \n2- Remover produto \n3- Editar um produto \n4- Listar produtos cadastrados \n0- Sair`))

    switch (opcao){

   case 1:
    
            cadastrarNome = prompt("Digite o nome do produto a ser cadastrado: ").toUpperCase()

                while(cadastrarNome.length < 1){
                    alert(`O campo de nome do produto não pode ficar em branco. Por favor digite novamente`)
                    cadastrarNome = prompt("Digite o nome do produto a ser cadastrado: ").toUpperCase()
                }

            pesquisarProduto = vetorNome.includes(cadastrarNome)
            
        if(pesquisarProduto == false){

            cadastrarMarca = prompt("Digite marca do produto a ser cadastrado: ").toUpperCase()

                while(cadastrarMarca.length < 1){
                    alert(`O campo de nome da marca não pode ficar em branco. Por favor digite novamente`)
                    cadastrarMarca = prompt("Digite marca do produto a ser cadastrado: ").toUpperCase()
                }

            cadastrarValor = Number(prompt("Digite o valor do produto a ser cadastrado: "))

                while(cadastrarValor <= 0){
                    
                    alert(`O valor do produto deve ser positivo e maior que zero`)
                    cadastrarValor = Number(prompt("Digite o valor do produto a ser cadastrado: "))
                }
                
            vetorNome.push(cadastrarNome)
            vetorMarca.push(cadastrarMarca)
            vetorValor.push(cadastrarValor)

            
            alert(`Produto cadastrado!`)
        }
        else{

            alert(`Já existe um produto com esse nome no sistema! Por favor tente novamente.`)
        }

            pesquisarProduto = false
        
    break

    case 2:
    
            excluirProduto = prompt("Qual produto você deseja excluir?").toUpperCase()
        
            pesquisarProduto = vetorNome.includes(excluirProduto)

        if(pesquisarProduto == true){

            indiceExcluir = vetorNome.indexOf(excluirProduto)

            vetorNome.splice(indiceExcluir, 1, )
            vetorMarca.splice(indiceExcluir, 1, )
            vetorValor.splice(indiceExcluir, 1, )

            alert(`Produto excluido!`)

            pesquisarProduto = false
        }
        else{
            alert(`Produto não encontrado!`)
        }
    break

    case 3:

            editarNome = prompt("Qual produto você deseja editar?").toUpperCase()

            pesquisarProduto = vetorNome.includes(editarNome)

        if(pesquisarProduto == true){

            editarNovoNome = prompt("Digite o nome a ser editado do produto: ").toUpperCase()

                while(editarNovoNome.length < 1){
                    alert(`O campo de nome do produto não pode ficar em branco. Por favor digite novamente`)
                    editarNovoNome = prompt("Digite o nome a ser editado do produto: ").toUpperCase()
                }

            pesquisarProduto = vetorNome.includes(editarNovoNome)    
            
            if(pesquisarProduto == false || editarNome == editarNovoNome){

                editarNovaMarca = prompt("Digite a marca a ser editada do produto: ").toUpperCase()

                    while(editarNovaMarca.length < 1){
                        alert(`O campo de nome da marca não pode ficar em branco. Por favor digite novamente`)
                        editarNovaMarca = prompt("Digite a marca a ser editada do produto: ").toUpperCase()
                    }

                editarNovoValor = prompt("Digite o valor a ser editado do produto: ")

                    while(editarNovoValor <= 0){
                            
                        alert(`O valor do produto deve ser positivo e maior que zero`)
                        editarNovoValor = Number(prompt("Digite o valor do produto a ser cadastrado: "))
                    }
        
                indiceEditar = vetorNome.indexOf(editarNome)
                vetorNome.splice(indiceEditar, 1, editarNovoNome)
                vetorMarca.splice(indiceEditar, 1, editarNovaMarca)
                vetorValor.splice(indiceEditar, 1, editarNovoValor)

                alert(`Produto editado!`)
            }
            else{
                alert(`Já existe um produto com esse nome no sistema. por favor tente novamente!`)
            }
        }
        else{

            alert(`Produto não encontrado!`)
        }
        pesquisarProduto = false
        
    break

    case 4:
    
        if(vetorNome.length != 0){

            for(let i=0;i < vetorNome.length;i++){

            mensagemLista += (` Produto: ${vetorNome[i]}, Marca: ${vetorMarca[i]}, Valor: R$ ${vetorValor[i]}\n `)
            }

            alert(mensagemLista)
            mensagemLista = ""
        }
        else{   
            
            alert(`Ainda não há nenhum produto cadastrado no sistema.`)

        }
    
    break

   case 0:

        crud = "finalizado"
        alert(`Saindo...`)
    
    break

  default:

        alert("Opção inválida!")
    
}

    }while (crud != "finalizado")