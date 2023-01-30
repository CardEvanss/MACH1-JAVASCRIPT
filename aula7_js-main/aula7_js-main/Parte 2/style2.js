/* Exemplo de laço for, contagem de 1 a 8 */
{
for (let contador = 0; contador < 9; contador++) {
    // console.log(contador);
}
}

{
    /* O mesmo exemplo em while*/
    let contador = 1
    while(contador<9){
        // console.log(contador)
        contador ++
    }
}


/*
Exemplo de lista escrita na mão
    1 - Elis
    2 - Dimas
    3 - Charle
    4 - Vah
*/


/*
Exemplo de lista array JS
    0 - Elis
    1 - Dimas
    2 - Charle
    3 - Vah
*/

{
    /* Declarando uma variável do tipo array*/
    let convidados = ['Elis','Dimas','Charle','Vah']
    // console.log(convidados) // Exibo o array intteiro com todas
    
    /* PESSIMO EXEMPLO */
    if(convidados =='Elis') {}// Falsa
    
    /* PESSIMO EXEMPLO */
    if(convidados[0]== 'Elis' || convidados[1]== 'Elis' || convidados[2]== 'Elis' || convidados [3]== 'Elis'){}
    [
    
    ]

    // console.log('Tipos de dados são',typeof convidados)
}


{
     /* Declarando uma variável do tipo array*/
    let convidados = ['Elis','Dimas','Charle','Vah']

    for(let contador=0; contador < convidados.length; contador ++){
        if(convidados[contador] !== 'Dimas'){
            console.log('Convidado'+(contador+1), convidados[contador])
        }
        console.log('Convidado'+(contador+1), convidados[contador])
    }
}


{
    let convidados = ['Elis','Dimas','Charle','Vah']
    for (let convidados of convidados) {
    console.log(convidados)
    }
}

