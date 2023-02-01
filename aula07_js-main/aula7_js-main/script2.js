{
let pilotos = prompt("Escreva o nome dos pilotos em ordem de chegada, separados por uma virgula (ex: piloto1,piloto2 ...)");
         
         let arPilotos = pilotos.split(",");
         let resposta = "";
         let i = 0;
         
         
         if (arPilotos == "") {
            alert("porfavor digite um nome!");
         } else {
            for (let nome of arPilotos) {
               i++;
               if (i <= 3) {
                  resposta = resposta + `Pódio - ${nome} - ${i}\n`;
               } else {
                  resposta = resposta + `${nome} - ${i}\n`;
               }
            }
           alert(resposta);
         }
}