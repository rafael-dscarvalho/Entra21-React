let pessoa = {

    "nome": "Marcos",
    "idade": 25,
    "email": "blablabla@hotmail.com",
    "apresentarPessoa": function(){
        alert(`Nome: ${this.nome}, Idade: ${this.idade}, Email: ${this.email}`)
    }
}

alert(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Email: ${pessoa.email}`)

pessoa.apresentarPessoa()