{
    let nome = 'Cleyton' // String ou texto
    let idade = 32 // Number ou número
    let filhos = ['Maria','Rael'] // Array (Object)
    /* Descrevendo objeto pessoa */
    let pessoa = {
        nome: 'Cleyton',
        idade: 32,
        filhos: ['Maria','Rael'],
        altura: 1.69,
        corDosOlhos: 'Castanho Escuro',
        estadoCivil: 'Casado'
    }

    console.log(pessoa)
}


{
    let transacaoPix = {
        chavePix: 'cleytonwide@gmail.com',
        valor: 1000.00,
        data:'01/02/2023',
        chaveDeTransacao: 254478554551,
        descricao: 'Ajuda ao professor'
    }
    console.log(transacaoPix)
    console.log('Valor do pix', transacaoPix.data)
    console.log('Valor do pix', transacaoPix.valor)

}

{
    let carro = {
        tipoDeCarro:'SUV',
        marca:'Jeep',
        motor:{
            tipoMotor:2.8,
            descricao: "V8",
            cavalos: '500 cv',
            tracao: '4x4'
        },
        anoFabricacao:2023,
        cambio:'Automático',
        preco:200000,
    }

    console.log(carro)
}
