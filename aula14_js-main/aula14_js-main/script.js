//console.log("Inicializou meu script, vamos começar a brincadeira!")

let titulo = document.getElementById("titulo-dom").textContent
console.log(document.getElementById("titulo-dom").textContent)
console.log(titulo.textContent)


/* Identificando um objeto no document do DOM utilizando class */
let paragrafos = document.getElementsByClassName('paragrafo-custom')
console.log(paragrafos[0] .outerText)
console.log(paragrafos[1] .outerText)



let tag = document.getElementsByClassName('div')
console.log(tag)