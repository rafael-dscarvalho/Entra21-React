let programador = {

    "nome": "Rafael",
    "idade": "20",
    "linguagens": ["java", "javascript", "html", "css", "sql"]
}

for(let i=0;i<programador.linguagens.length; i++){

    alert(`Linguagem ${i+1}: ${programador.linguagens[i]}`)
}