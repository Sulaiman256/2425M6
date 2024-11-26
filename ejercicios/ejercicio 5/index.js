console.log("Ejercicio 5");
let bd = [];

// A continuación, captura en diferentes variables el value de los inputs de html.
/*
const nombre = document.querySelector(".form-control").value;
const apellido1 = document.querySelector(".form-control").value;
const apellido2 = document.querySelector(".form-control").value;
const dni = document.querySelector(".form-control").value;
const imagen = document.querySelector(".form-control").value;

// Ahora mostraremos el valor de los inputs con console.log

console.log("Nombre: ", nombre);
console.log("Apellido 1: ", apellido1);
console.log("Apellido 2: ", apellido2);
console.log("DNI: ", dni);
console.log("Imagen: ", imagen);
*/
// Crear una funcion que agrupe el valor de los inputs

let nombre = document.querySelector("#formName").value;
let apellido1 = document.querySelector("#formApellido1").value;
let apellido2 = document.querySelector("#formApellido2").value;
let dni = document.querySelector("#formDni").value;
let imagen = document.querySelector("#formImagen").value;

function mostrarDatos() {
  nombre = document.querySelector("#formName").value;
  apellido1 = document.querySelector("#formApellido1").value;
  apellido2 = document.querySelector("#formApellido2").value;
  dni = document.querySelector("#formDni").value;
  imagen = document.querySelector("#formImagen").value;
  console.log("Nombre: ", nombre);
  console.log("Apellido 1: ", apellido1);
  console.log("Apellido 2: ", apellido2);
  console.log("DNI: ", dni);
  console.log("Imagen: ", imagen);

  document.querySelector(".card").innerHTML = `

<img src="${imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><span>${nombre} </span><span>${apellido1} ${apellido2}</span></h5>   
            <p>DNI: <span>${dni}</span></p>   
          </div>

`;
  const usuari = {
    nom: nombre,
    cognoms: `${apellido1} ${apellido2}`,
    dni: dni,
    urlImatge: imagen,
  };

  // Ahora agregaremos objetos a la array usando push()
  console.log(usuari);
  bd.push(usuari);
  pintaTaula();
}

function pintaTaula() {
  console.log("Realizando tabla con datos");

  console.log(bd);
  let contenido = "";

  bd.forEach((usuario, index) => {
    console.log(usuario);
    contenido += `
  <tr>
    <td>${index + 1}</td>
    <td><img src="${
      usuario.urlImatge
    }" alt="avatar" width="50" height="50"></td>
    <td>${usuario.nom}</td>
    <td>${usuario.cognoms}</td>
    <td>${usuario.dni}</td>
  </tr>
  `;
  });
  document.querySelector("#user").innerHTML = contenido;
}

// Anadir innerhtml para la card imagen e dni

document.querySelector("#buttonFicha").addEventListener("click", mostrarDatos);
