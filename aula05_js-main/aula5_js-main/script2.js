
let animal = prompt("Qual o seu PET?");
    animal = animal.toLowerCase();
         
    switch (animal) {
            case "cachorro":
            case "gato":
            case "coelho":
               alert("Oferecemos para seu PET, banho, tosa, ração");
               break;
            case "cavalo":
            case "cabra":
            case "jumento":
               alert("Oferecemos para seu PET, ração e um encaminhamento com um veterinario especializado.");
               break;
            case "rato":
               alert("Oferecemos para seu PET, gaiola especial e ração.");
               break;
            case "passarinho":
               alert("Oferecemos para seu PET um serviço de implante de rastreador e ração.");
               break;
            default:
               alert("infelizmente, não podemos receber seu PET");
}