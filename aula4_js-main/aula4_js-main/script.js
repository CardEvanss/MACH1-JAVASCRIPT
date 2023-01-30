// IF - SE 
// Verificando se um número armazenado na variável é menor que 10
/*
 Comparando se é menor
 Número < 10
 5 < 10 = Verdadeiro ou true
 11 < 10 = Falso ou false
 10 < 10 = Falso ou false

 Comparando se é maior
 10 > 10 = Falso ou false
 8 > 10 = Falso ou false
 15 > 10 = Verdadeiro ou true

 Comparando se um número é maior ou igual
 10 >= 10 = Verdadeiro ou true
 9 >= 10 = Falso ou false

 Comparando se um número é menor ou igual
 10 <= 10 = Verdadeiro ou true
 11 <= 10 = Falso ou false


 Comparar se o valor dos números é exatamente igual
 10 == 10 = Verdadeiro ou true
 10 == '10' = Verdadeiro ou true

 Comparar se o valor dos tipos é exatamente igual
  10 === 10 = Verdadeiro ou true
  10 === '10' = Falso ou false
*/

{// Jeito 1. Funciona mas não é bom
let numeroRecebido = 10;
let numeroComparado = 25;

//Numero recebido é maior que o número comparado
if(numeroRecebido > numeroComparado) {
    console.log('O número recebido é maior!')
}else{
    if(numeroRecebido < numeroComparado) {
        console.log('O número recebido é menor!')
    }else{
        console.log('O número recebido é igual!')
    }
}}


{
    let numeroRecebido = 45;
    let numeroComparado = 25;

    if(numeroRecebido > numeroComparado){
        console.log('O número recebido é maior!')
    } else if (numeroRecebido < numeroComparado) {
        console.log ('O número recebido é menor!')
    }else{
        console.log('O número recebido é igual!')
    }

}

