let frete = 12.50
let valorCompra
let categoria
let valorTotal


valorCompra = Number(prompt("Digite o valor da sua compra: "))
categoria = Number(prompt("Digite a sua categoria de assinatura: "))

switch(categoria){

    case 1:

    valorTotal = valorCompra * 0.8
    alert("O valor total da sua compra com frete ficou: " + valorTotal)
    break

    case 2:

    valorTotal = (valorCompra * 0.8) + frete
    alert("O valor total da sua compra com frete ficou: " + valorTotal)
    break

    case 3:

    valorTotal = (valorCompra * 0.9) + frete
    alert("O valor total da sua compra com frete ficou: " + valorTotal)
    break

    case 4:

    valorTotal = valorCompra + frete
    alert("O valor total da sua compra com frete ficou: " + valorTotal)

    break

    default:

    alert("Opção inválida")

}