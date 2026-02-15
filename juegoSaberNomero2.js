let btn=document.getElementById("toca");
btn.addEventListener("click",saberNomero);
let rand=Math.floor(Math.random() * 10) + 1;
    let tuNumero=document.getElementById("tuNumero");
    let ordenador= document.getElementById("ordenador");
    let resultado=document.getElementById("resultado");

function saberNomero(event) {
        event.preventDefault();

    let numero=Number(document.getElementById("numero").value);
if (rand > numero) {
    tuNumero.textContent="tu nomero es"+numero;
    ordenador.textContent="soy el ordenador mi numero es"+rand;
    resultado.textContent="mi nomero el mayor no el mismo prubo otra vez";

}
if (rand < numero) {
    tuNumero.textContent="tu nomero es"+numero;
    ordenador.textContent="soy el ordenador mi numero es"+rand;
    resultado.textContent="tu nomero el mayor no el mismo prubo otra vez";

}
if (rand === numero) {
    tuNumero.textContent="tu nomero es"+numero;
    ordenador.textContent="soy el ordenador mi numero es"+rand;
    resultado.textContent="woooow es lo mismo vamos a disftutar";

}
}