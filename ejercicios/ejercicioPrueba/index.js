const numeroAdivinar = 10;


let intentos = 0;

let inputField = document.querySelector("#prompt");
let submitButton = document.querySelector("#submit");
let message = document.querySelector("#message");


submitButton.addEventListener("click", function (e) {

  e.preventDefault();
  let numeroIntroducido = parseInt(inputField.value);
  console.log(inputField);
  
    if (inputField == "") {
      message.textContent = "Introduce un numero";
    } else {
      message.textContent = `has introducido un numero: ${inputField}`;
  
      intentos++;
      console.log(intentos);
  
      if (numeroIntroducido < numeroAdivinar) {
        message.textContent = "Es menor al objetivo";
      } else if (numeroIntroducido > numeroAdivinar) {
        message.textContent = "Es mayor al objetivo";
      } else if (parseInt(numeroIntroducido) === numeroAdivinar) {
        message.textContent = "Has adivinado el numero!!! ";
        return;

      }

      if (intentos >= 3) {
        message.textContent = "Has excedido el numero de intentos y el numero es: " + numeroAdivinar;
      }
    }
  }
  
);
