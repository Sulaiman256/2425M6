console.log("Sesion 6");

// Propiedades de un objeto math

console.log("Valor de PI: ", Math.PI);
console.log("Valor absoluto de -5", Math.abs(-5));
console.log("Raiz cuadrada de 16", Math.sqrt(16));

console.log("Longitud de Hola: ", "hola caracola".length);
console.log("hola"[2]);
console.log("Elefante".charAt(0));
console.log("Posicion de la primera e: ", "Elefante".indexOf("E"));
console.log("Mi cumple: 13 de abril ".substring(11, 3));
console.log("13/04/1973".split("/")[1]);
console.log("Cuento palabras:", "Esto es un texto largo".split(" ").length);
regexp = /.o.a/g;
console.log("familia".includes("familia"));
console.log("Hola familia familiar".match(regexp));
console.log("Hola familia familia".search("familia"));
let email = "                     sulaiman@gmail.com        ";
console.log("Elimina espacios inicio y fin: ", email.trim());
console.log(String.fromCodePoint(120));
console.log("x".codePointAt(0));

// Exercici 1 - Valor absolut

function valorAbsolut(num) {
  return Math.abs(num);
}
console.log(valorAbsolut(-5)); // Retorna 5
console.log(valorAbsolut(3)); // Retorna 3
// Exercici 2 - Signe d'un número
function determinarSigne(num) {
  return Math.sign(num);
}

console.log(determinarSigne(-10)); // Retorna "El número és negatiu."
console.log(determinarSigne(0)); // Retorna "El número és zero."
console.log(determinarSigne(7)); // Retorna "El número és positiu."

// Exercici 3 - Màxim de tres números

function trobarMaxim(a, b, c) {
  return Math.max(a, b, c);
}

// Exemple d'ús:
console.log(trobarMaxim(5, 10, 3)); // Retorna 10

// Exercici 4 - Mínim d'un array

function trobarMinim(arrayNumeros) {
  return Math.min(...arrayNumeros);
}

// Exemple d'ús:
var numeros = [3, 7, 2, 9, 4];
console.log(trobarMinim(numeros)); // Retorna 2

// Exercici 5 - Arrel quadrada

function calcularArrelQuadrada(num) {
  return Math.sqrt(num);
}

// Exemple d'ús:
console.log(calcularArrelQuadrada(16)); // Retorna 4
console.log(calcularArrelQuadrada(-9)); // Retorna "No es pot calcular l'arrel quadrada d'un número negatiu."

// Exercici 6 - Arrodonir un número a l'enter més proper

function arrodonirNumero(num) {
  return Math.round(num);
}

// Exemple d'ús:
console.log(arrodonirNumero(4.6)); // Retorna 5
console.log(arrodonirNumero(4.3)); // Retorna 4
// Exercici 7 - Arrodonir cap amunt

function arrodonirCapAmunt(num) {
  return Math.ceil(num);
}

// Exemple d'ús:
console.log(arrodonirCapAmunt(3.1)); // Retorna 4
console.log(arrodonirCapAmunt(7.9)); // Retorna 8

// Exercici 8 - Arrodonir cap avall

function arrodonirCapAvall(num) {
  return Math.floor(num);
}

// Exemple d'ús:
console.log(arrodonirCapAvall(5.8)); // Retorna 5
console.log(arrodonirCapAvall(2.2)); // Retorna 2
// Exercici 9 - Eliminar la part decimal d'un número

function truncarNumero(num) {
  return Math.trunc(num);
}

// Exemple d'ús:
console.log(truncarNumero(6.7)); // Retorna 6
console.log(truncarNumero(-6.7)); // Retorna -6

// Exercici 10 - Calcular el sinus d'un angle

function calcularSinus(angleGraus) {
  return Math.sin((Math.PI * angleGraus) / 180);
}

// Exemple d'ús:
console.log(calcularSinus(30)); // Retorna 0.5
console.log(calcularSinus(90)); // Retorna 1

// Exercici 1 - Interpolació de variables amb cometes obertes

function interpolarVariables(nom, edat) {
  return `El meu nom és ${nom} i tinc ${edat} anys.`;
}

// Exemple d'ús:
console.log(interpolarVariables("Joan", 25)); // Retorna "El meu nom és Joan i tinc 25 anys."

// Exercici 2 - charAt

function obtenirCaracter(cadena, posicio) {
  if (posicio >= 0 && posicio < cadena.length) {
    return cadena[posicio];
  } else {
    return "Posició no vàlida.";
  }
}

// Exemple d'ús:
console.log(obtenirCaracter("Hola", 1)); // Retorna "o"

// Exercici 3 - indexOf

function trobarPosicio(cadena, subcadena) {
  return cadena.indexOf(subcadena);
}

// Exemple d'ús:
console.log(trobarPosicio("JavaScript és genial", "genial")); // Retorna 13

// Exercici 4 - repeat

function repetirCadena(cadena, vegades) {
  return cadena.repeat(vegades);
}

// Exemple d'ús:
console.log(repetirCadena("Hola", 3)); // Retorna "HolaHolaHola"

// Exercici 5 - substring

function obtenirSubstring(cadena, inici, fi) {
  if (inici >= 0 && fi <= cadena.length && inici <= fi) {
    return cadena.slice(inici, fi);
  } else {
    return "Inici o fi no vàlids.";
  }
}

// Exemple d'ús:
console.log(obtenirSubstring("JavaScript", 0, 4)); // Retorna "Java"

// Exercici 6 - substr

function obtenirSubstr(cadena, inici, longitud) {
  if (inici >= 0 && longitud >= 0 && inici + longitud <= cadena.length) {
    return cadena.substr(inici, longitud);
  } else {
    return "Inici o longitud no vàlids.";
  }
}
// Exercici 7 - split

function dividirCadena(cadena, separador) {
  return cadena.split(separador);
}

// Exemple d'ús:
console.log(dividirCadena("poma,pera,plàtan", ",")); // Retorna ["poma", "pera", "plàtan"]

// Exemple d'ús:
console.log(obtenirSubstr("JavaScript", 4, 6)); // Retorna "Script"

// Exercici 8 - startsWith

function comencaAmb(cadena, subcadena) {
  return cadena.startsWith(subcadena);
}

// Exemple d'ús:
console.log(comencaAmb("JavaScript", "Java")); // Retorna true

// Exercici 9 - endsWith

function acabaAmb(cadena, subcadena) {
  return cadena.endsWith(subcadena);
}

// Exemple d'ús:
console.log(acabaAmb("JavaScript", "Script")); // Retorna true
// Exercici 10 - includes

function contéSubcadena(cadena, subcadena) {
  return cadena.includes(subcadena);
}

// Exemple d'ús:
console.log(contéSubcadena("JavaScript és genial", "genial")); // Retorna true
// Exercici 11 - search

function cercarCadena(cadena, subcadena) {
  return cadena.search(subcadena);
}

// Exemple d'ús:
console.log(cercarCadena("JavaScript és genial", "genial")); // Retorna 13
// Exercici 12 - match

function buscarCoincidencies(cadena, patró) {
  return cadena.match(patró);
}

// Exemple d'ús:
console.log(buscarCoincidencies("Hola 123, adéu 456", /\d+/g)); // Retorna ["123", "456"]

// Exercici 13 - replace
function substituirCadena(cadena, vellSubcadena, nouSubcadena) {
  return cadena.replace(vellSubcadena, nouSubcadena);
}

// Exemple d'ús:
console.log(substituirCadena("Hola món", "món", "JavaScript")); // Retorna "Hola JavaScript"

// Exercici 14 - replaceAll

function substituirTotes(cadena, vellSubcadena, nouSubcadena) {
  return cadena.replaceAll(vellSubcadena, nouSubcadena);
}

// Exemple d'ús:
console.log(substituirTotes("Hola món, món", "món", "JavaScript")); // Retorna "Hola JavaScript, JavaScript"

// Exercici 1 - toLowerCase

function convertirMinuscules(cadena) {
  return cadena.toLowerCase();
}

// Exemple d'ús:
console.log(convertirMinuscules("Hola Món")); // Retorna "hola món"

// Exercici 2 - toUpperCase

function convertirMajuscules(cadena) {
  return cadena.toUpperCase();
}

// Exemple d'ús:
console.log(convertirMajuscules("Hola Món")); // Retorna "HOLA MÓN"
// Exercici 3 - trimStart

function eliminarEspaisInicials(cadena) {
  return cadena.trimStart();
}

// Exemple d'ús:
console.log(eliminarEspaisInicials("   Hola Món")); // Retorna "Hola Món"

// Exercici 4 - trimEnd

function eliminarEspaisFinals(cadena) {
  return cadena.trimEnd();
}

// Exemple d'ús:
console.log(eliminarEspaisFinals("Hola Món   ")); // Retorna "Hola Món"

// Exercici 5 - trim

function eliminarEspaisExtrems(cadena) {
  return cadena.trim();
}

// Exemple d'ús:
console.log(eliminarEspaisExtrems("   Hola Món   ")); // Retorna "Hola Món"
