
{
    let tempoDeCurso = prompt ('Quantos anos voce está na escola?')
    if (isNaN(tempoDeCurso)) {
        alert('Por favor digite apenas números.')
    }

    let reciclagens = tempoDeCurso / 2;
    reciclagens = parseInt(reciclagens);


    if (tempoDeCurso < 2) {
        alert('Voce ainda nao tem o tempo minimo (2 anos) de curso para ter uma reciclagem.');
    } else if(reciclagens) {
        alert(`Esse piloto particiou de: ${reciclagens} reciclagens durante o curso.`);
    }
}


