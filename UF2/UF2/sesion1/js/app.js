import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { HomePage } from "./views/HomePage.js";
import { AboutPage } from "./views/AboutPage.js";

function App() {
  return `
    ${Header()}
    <main id="content">
      <!-- El contenido cambiará dinámicamente -->
    </main>
    ${Footer()}
  `;
}

function navigate(page) {
  const content = document.querySelector("#content");

  if (page === "home") {
    content.innerHTML = HomePage();
  } else if (page === "about") {
    content.innerHTML = AboutPage();
  }
}

// Cargar la aplicación
document.querySelector("#root").innerHTML = App();

// Agregar eventos a los botones
const homeButton = document.querySelector("#homeButton");
const aboutButton = document.querySelector("#aboutButton");

homeButton.addEventListener("click", () => navigate("home"));
aboutButton.addEventListener("click", () => navigate("about"));

// Por defecto, mostramos la página de inicio
navigate("home");

// Exponer la función navigate al scope global para poder ser llamada desde el HTML
window.navigate = navigate;
