// RESPOSTAS

let letra = prompt('Digite uma letra do alfabeto')
letra = letra.toLowerCase()
if(!isNaN(letra)) {
    alert('Deve digitar uma letra do alfabeto para obter o resultado')
}

if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u')
{alert('Letra digitada é uma vogal')
} else {
    alert('A letra digitada é uma consoante')
}
