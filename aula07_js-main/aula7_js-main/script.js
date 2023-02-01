{ // for
    // inicializacao; condicao; incremento
    for (let i = 0; i < 9; i++) {
        // console.log(i);
    }
} console.log('------');

{ // Numeros impares
    let numero = 10;
    let nImpar = 0;
    for (let contador = 0; contador < numero; contador++) {
        if (contador % 2 != 0) {
            nImpar++;
        }
    }
    console.log('Numeros impar:', nImpar);
} console.log('------');

{ // array
    let usuarios = ['jorge', 'nico', 'evan', 10];
    console.log(usuarios[0]);
} console.log('------');

{ // for...of
    let usuarios = ['jorge', 'nico', 'evan', 10];

    for (variavel of usuarios) {
        console.log(variavel);
    }

    // fazendo no for
    for (let posicao = 0; posicao < usuarios.length; posicao++) {
        console.log(usuarios[posicao]);
        console.log(`O usuario ${usuarios[posicao]} esta na opsicao: ${posicao+1}`);
    }
} console.log('------');
{ // split
    let meses = 'janeiro fevereiro marco abril';
    let arrayMeses = meses.split(' ');

    for (mes of arrayMeses){
        console.log(mes);
    }
}