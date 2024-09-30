console.log("Ejercicio 4");

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

const nombre = document.querySelector("#formName").value;
const apellido1 = document.querySelector("#formApellido1").value;
const apellido2 = document.querySelector("#formApellido2").value;
const dni = document.querySelector("#formDni").value;
const imagen = document.querySelector("#formImagen").value;

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
}

// Añadir el evento de click al botón y que llame a la funcion anterior
document.querySelector("#buttonFicha").addEventListener("click", mostrarDatos);

// Anadir innerhtml para la card imagen e dni

document.querySelector(".card").innerHTML = `

<img src="${imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><span>${nombre} </span><span>${apellido1} ${apellido2}</span></h5>   
            <p>DNI: <span>${dni}</span></p>   
          </div>

`;

// Crea una variable de tipus objecte (anomena-la 'usuari') amb la següent estructura: ''' { nom, cognoms, dni, urlImatge } ''' i guarda-hi els valors que has obtingut dels inputs.

const usuari = {
  nom: nombre,
  cognoms: `${apellido1} ${apellido2}`,
  dni: dni,
  urlImatge: imagen,
};

let bd = [
  {
    usuari: usuari,
  },
];

// Ahora agregaremos objetos a la array usando push()

bd.push({
  usuari: {
    nom: "Marta",
    cognoms: "Fernandez",
    dni: "37890123A",
    urlImatge: "https://example.com/marta.jpg",
  },
});

function pintaTaula() {
  console.log("Realizando tabla con datos");

  console.log(bd);

  // Actualizaremos la funcion para recorrer todo a traves de un forEach y lo inyecte bien

  for (let i = 0; i < bd.length; i++) {
    console.log(bd);
    console.log(bd.length);
    document.querySelector("#user").innerHTML = `

    
    <tr>
              <td>1</td>
              <td><img width="30" src="${bd[i].usuari.urlImatge}" alt=""></td>
              <td>${bd[i].usuari.nom}</td>
              <td>${bd[i].usuari.cognoms}</td>
              <td>${bd[i].usuari.dni}</td>
            </tr>
            <!-- Usuario -->
            <tr>
              <td>2</td>
              <td><img width="30" src="${bd[i].usuari.urlImatge}" alt=""></td>
              <td>${bd[i].usuari.nom}</td>
              <td>${bd[i].usuari.cognoms}</td>
              <td>${bd[i].usuari.dni}</td>
            </tr>
    
    `;
  }
}

pintaTaula();
