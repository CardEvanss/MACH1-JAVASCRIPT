/*
Notação matemática
Media = (nota1 + nota2 + nota3)

1- Criar variável nomeAluno e receber com prompt o nome

2- Criar variável nota1 e converter em número recebendo com prompt a primeira nota

3- Criar variável nota2 e converter em número recebendo com prompt a primeira nota

4- Criar variável nota3 e converter em número recebendo com prompt a primeira nota

Segunda fase

5- Calcular a media do aluno e atribuir a uma variável

6- Se a média do aluno for maior ou igual a 7 ele está aprovado

7- Exibo no console que o aluno está aprovado se a media for maior ou igual a 7


*/

/*{
    let nomeAluno = prompt('Digite o nome do aluno')
    let nota1 = Number(prompt('Digite a primeira nota'))
    let nota2 = Number(prompt('Digite a segunda nota'))
    let nota3 = Number(prompt('Digite a terceira nota'))

    let Media = (nota1 + nota2 + nota3)/3

    if(Media >= 7){
        console.log(nomeAluno + ' Aprovado ' + ' Média:'+ Media )
    }else if (Media>=5){
        console.log(nomeAluno + ' Recuperação' + ' Média:'+ Media )
    }else{
        console.log(nomeAluno + ' Reprovado' + 'Media'+ Media)
    }
}*/

{
    /* Receba uma idade e determine se a idade digitada é de uma pessoa maior ou menor de idade */
    let idade = 25;

    if(idade>=18){
        console.log('Maior de idade')
    }else{
        console.log("Menor de idade")
    }
}

{// Usando ternários
    let idade = 10
    let maioridade = idade>=18 ? ' Maior de idade' : 'Menor de idade'
    console.log(maioridade)

}

{
    let idade = 10
    let cnh = false
    let maioridade = idade >= 18 ? true : false

    if(idade && cnh){
        console.log('Pode comprar um carro')
    }else{
        console.log('Não comprar um carro')
    }
}

{
    let idade = 15
    let dinheiro = true


    if(idade>=18  || dinheiro){
        console.log('Pode comprar um carro')
    }else{
        console.log('Não comprar um carro')
    }
}


{
    let idade = 'Dezoito'
    let numeroVerdadeiro = 
    console.log(isNaN(idade))
    idade = 18
    console.log(isNaN(idade))
    if (idade >= 18) {
        console.log('Maior de idade')
    }else {
        console.log('Menor de idade')
    }
    
}



{
    let tenhoCarro = true;
    let tenhoeMoto = false;
    let meusVeiculos =
    tenhoCarro || tenhoeMoto
     ? "Tenho carro ou moto!"
     : "Não tenho carro e moto!"
    console.log(meusVeiculos);
}


{
    let tenhoCarro = false;
    let tenhoeMoto = tenhoCarro ? false : true;
    let meusVeiculos = '';
    if(tenhoCarro && tenhoeMoto){
        meusVeiculos = 'Tenho Carro e moto';
    }else if(tenhoCarro){
        meusVeiculos = 'Tenho Carro';
    }else if(tenhoeMoto){
        meusVeiculos = 'Tenho Moto';
    }else{
        meusVeiculos = 'Não tenho veículo'
    }
    console.log(meusVeiculos)
}