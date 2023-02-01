/* ARRAY - Uma estrutura semelhante a uma lista de dados com posições definidas, 
que podemos percorrer utilizando estruturas de repetição.

Ele pode armazenar tipos de dados como string, números e objetos.
*/

{
    /* ARRAY ARMAZENANDO STRING */
    listaNomes = ['Cleyton','Dimas','Cauê']
    // Atribuindo uma posicao do array a uma variavel normal
    let cleyton = listaNomes[0] 
    console.log(cleyton)
    console.log(listaNomes)

    listaNumeros = [1,2,3,4,5,6,7]
    console.log(listaNumeros)
    /* Não muito recomendavel */
    listaMistaDasGalaxias = [1,'Cleyton',"",'4']
    console.log(listaMistaDasGalaxias)

}

{
    let frutas = []
    console.log('Lista de frutas: ',frutas);

    // Adicionando no final do array
    frutas.push('Banana')
    console.log('Lista de frutas: ',frutas);

    frutas.push('Maçã')
    console.log('Lista de frutas: ',frutas);

    frutas.unshift('Laranjas')
    // Removendo um item no final do array
    frutas.pop()
    console.log('Lista de frutas',frutas);

    //Remover um item do inicio do array
    frutas.shift()
    console.log()
}

