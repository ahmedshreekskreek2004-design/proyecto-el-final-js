let btnEnviar= document.getElementById("toca");
btnEnviar.addEventListener("click",mayorNumero);
let numeroOrdenador= Math.floor(Math.random() * 100) + 1;
let resultado= document.getElementById("resultado");
let ordenador=document.getElementById("ordenador");
function mayorNumero(event) {
    event.preventDefault();
    let numeroUserio= Number(document.getElementById("numero").value);

ordenador.textContent="soy el ordenador mi numero es"+numeroOrdenador;

    if (numeroUserio > numeroOrdenador) {
        resultado.textContent="disfruta tu ganas bravooo";
    }
   else if (numeroUserio < numeroOrdenador) {
        resultado.textContent="el ordenador gana puedes porobar otra vez para el ganar";
    }
    else if(numeroUserio==="")
        {
        resultado.textContent="introduce un numero primero!";

    }
    
   else if(numeroUserio === numeroOrdenador)  {
        resultado.textContent="woow lo mismo disfrutad junto";
    }
    
}
