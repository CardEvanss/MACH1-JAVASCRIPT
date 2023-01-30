/*const frutas = prompt('Digite o nome de uma fruta:')
switch (frutas) {
    // Caso de SE
    case 'Laranja':
    case 'laranja':
    case 'LARANJA':
        console.log('Laranjas custam R$ 2,00 o quilo.')
        break
    // Caso de ou com duas condições
    case 'Manga':
    case 'Papaya':
        console.log ('Mangas e papayas custam R$ 5,00 o quilo')
        break
    default:
        console.log(`Desculpe, não encontramos nenhuma fruta: ${frutas}. no nosso catálogo`)    
}*/

{
// NEGAÇÃO - QUANDO EU NEGO UMA CONDIÇÃO VERDADE
let recebeDado = 10
let ehUmNumero = !isNaN(recebeDado)

console.log('Valor recebido',recebeDado)
console.log('É um número:',ehUmNumero)

}


{
    let modeloCarro1 = 'Celta'
    let modelocarro2 = 'Fox'
    // Quero comparar se são diferentes
    if(modeloCarro1 !== modelocarro2){
    console.log('Modelos de carros são diferentes')
    }else{
        console.log('Modelos de carros são iguais')
    }
}


{
    let modeloCarro1 = '206'
    let modelocarro2 = 206
    // Quero comparar se são diferentes
    if(modeloCarro1 != modelocarro2){
    console.log('Modelos de carros são diferentes')
    }else{
        console.log('Modelos de carros são iguais')
    }
}