
// capturando elementos de html
const btn1 = document.querySelector('#btn1');
console.log(btn1);

// cambiamos el interior del h1 con un nuevo codigo HTML


const titulo = document.querySelector('h1').innerHTML = `
    <em>Nuevo titulo</em>
`
console.log(titulo);
// Escuchamos el evento click del boton 1

btn1.addEventListener("click", fnBtn1)
function fnBtn1() {
    console.log("Boton 1 pulsado");
  
}

// Lo mismo para el boton 2 pero de forma resumida

document.querySelector('#btn2').addEventListener("mouseover", function(){
    console.log("Ratón sobre el boton 2");
})

// Evaluando textos

const operacion = "2+3"
console.log("operacion:", operacion); 
console.log("El resultado es:", eval(operacion));



