let vetorFiguras = ["circulo", "triangulo", "quadrado", "retangulo", "losango", "pentagono", "hexagono", "trapezio"]
let vetorCaptcha = []
let vetorCaptchaDigitado = []
let vetorUsuario = []
let vetorSenha = []
let usuario = ""
let senha = ""
let numeroRandom = 0
let Figura = 0
let opcao
let programa = ""
let figuraDigitada = ""
let acertouCaptcha = ""
let mensagemLista = ""
let repetirCaptcha


alert(`Bem vindo ao nosso sistema! Escolha através do menu a seguir qual opção você deseja realizar e resolva o CAPTCHA de segurança para cadastrar um usuário.`)

do{
    
    opcao = Number(prompt(`1- Cadastrar \n2- Listar usuários e senhas \n0- Sair`))

    repetirCaptcha = 0

    switch(opcao){

        case 1: //gera um captcha que caso seja resolvido corretamente, cadastra usuario e senha em vetores separados

            usuario = prompt(`Usuário: `)

                while(usuario.length < 1){ //verifica se o campo de usuario está vazio, se estiver ele pede para repetir a pergunta

                    alert(`O campo deusuário não poder ser vazio. Por favor digite um usuário válido.`)

                    usuario = prompt(`Usuário: `)

                }

            senha = prompt(`Senha: `)

                while(senha.length < 1){//verifica se o campo de usuario está vazio, se estiver ele pede para repetir a pergunta

                    alert(`O campo de senha não poder ser vazio. Por favor digite uma senha válida.`)

                    senha = prompt(`Senha: `)
                    
                }

                while(repetirCaptcha != 2){

                    //preenche o vetorCaptcha 
                    for(let i=0;i<4;i++){

                        numeroRandom = Math.floor(Math.random() * 8)

                        Figura = vetorFiguras[numeroRandom]

                            while(vetorCaptcha.includes(vetorFiguras[numeroRandom])){//verifica se já existe uma figura igual dentro do vetorCaptcha

                                numeroRandom = Math.floor(Math.random() * 8)

                                Figura = vetorFiguras[numeroRandom]

                            }
                        
                        vetorCaptcha.push(Figura)
                    
                    }

                alert(`CAPTCHA: ${vetorCaptcha}`)//mostra na tela o captcha que o usuario deve digitar na mesma sequencia 

                    for(let i=0;i<4;i++){//cria o vetorCaptchaDigitado, com as figuras na ordem que o usuario digitou

                        figuraDigitada = prompt(`Digite a ${i+1}ª figura geométrica do CAPTCHA: `)

                        vetorCaptchaDigitado.push(figuraDigitada)

                    }

                    for(let i=0;i<4;i++){//verifica se o usuário acertou a sequencia do captcha mostrado ou não

                        if(vetorCaptchaDigitado[i] != vetorCaptcha[i]){
                            
                            acertouCaptcha = "NAO"
                        }

                    }

                    if(acertouCaptcha == "NAO"){//caso o usuário tenha errado a sequencia do captcha, este escopo é executado

                        alert(`Usuário não cadastrado!\n\nA sequência mostrada era: ${vetorCaptcha}\n\nVocê digitou: ${vetorCaptchaDigitado}`)

                        do{
                            
                            repetirCaptcha = Number(prompt(`Deseja repetir o CAPTCHA? Digite:\n1- SIM\n2- NÃO (Voltar ao menu)`))//pergunta se o usuario deseja uma nova tentativa com outro captcha que será gerado ou se deseja retornar ao menu

                                if(repetirCaptcha != 1 && repetirCaptcha != 2){

                                    alert(`Opção inválida, por favor digite 1 ou 2`)
                                }

                        }while(repetirCaptcha != 1 && repetirCaptcha != 2)

                    }
                    else{//caso o usuário tenha acertado a sequencia, este escopo é executado. armazena usuario e senha em seus respectivos vetores

                        alert(`Cadastro realizado.`)

                        vetorUsuario.push(usuario)

                        vetorSenha.push(senha)

                        repetirCaptcha = 2 // condição para que não seja repetido o processo do captcha

                    }

                    for(let i=4;i>=0;i--){ //redefine os vetores onde foi gerado o captcha e o que foi digitado pelo usuario, ambos vazios novamente

                        vetorCaptcha.splice(i, 1, )
                        vetorCaptchaDigitado.splice(i, 1, )
                    }
            }

        break

        case 2: //mostra lista de usuarios e senhas cadastrados na tela

            if(vetorUsuario.length != 0){ //verifica se o vetor não está vazio, se não estiver, ele mostra executa este escopo, que mostra a lista de usuario e suas respectivas senhas cadastradas.

                for(let i=0;i < vetorUsuario.length;i++){

                mensagemLista += (`Usuario: ${vetorUsuario[i]}, Senha: ${vetorSenha[i]}\n`)
                }

                alert(mensagemLista)

                mensagemLista = ""
            }
            else{//caso o vetorUsuario esteja vazio, apenas esta mensagem é exibida   
                
                alert(`Não existem usuários cadastrados!`)

            }

        break

        case 0: //finaliza o programa quando 0 é digitado

            programa = "finalizado"
            alert(`Saindo...`)
        
        break

        default: //caso a opcao digitada nao seja 1, 2 ou 0

        alert("Opção inválida!")
    }
    

}while (programa != "finalizado")



