/*{
    let numeroRecebido = 5
    let numerosImpares = 0

    if (numeroRecebido % 2 == 0){ // Verifico se é par ou ímpar
        console.log('Meu número é par')
    }else{
        numerosImpares += 1 //Somo um ímpar na brincadeira
        numeroRecebido -- //Decremento
    }

    console.log 
} */


{
    let recebeNumero = 16
    let numerosImpares = 0
    // Percorrendo o número até o intervalo de 0
    while (recebeNumero>0){
      if (recebeNumero % 2 !== 0) {
        numerosImpares += 1
      }
        recebeNumero --
    }
    console.log('Numeros ímpares', numerosImpares)
}



{
    let diasUteisDaSemana = 5
    let diasEstudo = 1

    while(diasEstudo<=diasUteisDaSemana){
        switch (diasEstudo) {
            case 1:
                console.log("Fui estudar na segunda")
                break
            case 2:
                console.log("Fui estudar na terça")
                break
            case 3:
                console.log("Fui estudar na quarta")
                break
            case 4:
                console.log("Fui estudar na quinta")
                break
            case 5:
                console.log("Fui estudar na sexta")
                break
            default:
                console.log ("Não fui estudar")
                break
        }
        diasEstudo++ 
    }
}


{
    let cont = 0

    do {
       cont += 1
       console.log(cont)
    } while (cont < 5)
}
