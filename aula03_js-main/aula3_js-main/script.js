{
    let titulo = 'Aula de JS'
    let descricao = 'Aula de JS falando sobre textos.'

    console.log('Texto:', titulo + ' ' + descricao)
    console.log('Tipo da variavel', typeof titulo)
}

{
let texto = 'Aula de JS'
texto = texto + '' + 'Aula de JS falando sobre textos.'

console.log('Texto:', texto)
console.log('Tipo da variavel', typeof titulo)
}


{//Concatenando utilizando caracteres de scape
    let texto = 'Aula de JS'
    texto = `${texto} Aula de JS falando sobre texto.`
    console.log('Texto:', texto)
    console.log('Tipo de variavel', typeof texto)
}

{
    let tipoNavegador = 'Mozilla'
    console.log('tamanho da string' ,tipoNavegador.length)
    console.log(tipoNavegador.slice(0,4))
    //TRANSFORMAR MEU TEXTO EM MAÍUSCULO
    console.log(tipoNavegador.toUpperCase())
    //TRANSFORMAR MEU TEXTO EM MINUSCULO
    console.log(tipoNavegador.toLowerCase())
    //SUBSTITUIR PEDAÇO DO TEXTO
    console.log(tipoNavegador.replace('Moz', 'Van'))

    let outroTextoComEspaco = 'Aula JS'
    console.log (outroTextoComEspaco.replace(' ',''))
}


{
    let nossaEscola = 'Mach1';
    let anoLetivo = 2022;
    console.log(nossaEscola.slice(0,3) + ' ' + anoLetivo)
}

{
    let nomeAluno = 'Meu nome é Cauê'
    console.log(nomeAluno.toUpperCase())
}




{//RESPOSTA DA QUESTÃO Aula 3 – Manipulação e uso de strings - prática
    let manipu = 'Manipulando strings com JS'
    console.log(manipu.toUpperCase())
    console.log(manipu.slice(0,5))
    alert(manipu.length)

    let concat = 'Vamos concatenar as duas strings'
    console.log('', manipu + ' ' + concat)
    
}