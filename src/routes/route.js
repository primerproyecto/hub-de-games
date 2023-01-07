//route.js

//Pages
import { template as home } from "../pages/Home";
// JUEGOS
import { template as tresEnRaya, listeners as creacionDeJuego } from "../pages/TresEnRaya";
import { template as pokeapi, listeners as pokeApiListeners } from "../pages/Pokeapi";
import { template as encuentraParejas, listeners as encuentraParejasListers } from "../pages/EncuentraParejas";
import { template as preguntas } from "../pages/Preguntas";
import { template as whakaTopo, listeners as whakaOstias } from "../pages/WhakaTopo";
import { template as ahorcado, listeners as ahorcadoListeners } from "../pages/Ahorcado";
//Components
import { listeners as headerListeners } from "../components/Header";
import { listeners as footerListeners } from "../components/Footer";
import { homelisteners } from "../pages/Home";
//Routes
export const routes = {
  "/": { title: "Home", render: home },
  "/tresenraya": { title: "Tres en raya", render: tresEnRaya, listener: creacionDeJuego },
  "/pokeapi": { title: "Pokekapi", render: pokeapi, listener: pokeApiListeners },
  "/encuentraparejas": { title: "Encuentra parejas", render: encuentraParejas, listener: encuentraParejasListers },
  "/preguntas": { title: "Preguntas", render: preguntas },
  "/whakatopo": { title: "Whaka topo", render: whakaTopo, listener: whakaOstias },
  "/ahorcado": { title: "Ahorcado", render: ahorcado, listener: ahorcadoListeners },
};
//Router
export const router = () => {
  let page = routes[location.pathname];
  if (page) {
    document.title = page.title;
    document.querySelector("#app").innerHTML = page.render();
    headerListeners();
    footerListeners();
    if (page.title === "Whaka topo") page.listener();
    if (page.title === "Pokekapi") page.listener();
    if (page.title === "Tres en raya") page.listener();
    if (page.title === "Ahorcado") page.listener();
    if (page.title === "Encuentra parejas") page.listener();
    if (page.title === "Home") homelisteners();
    
  } else {
    history.replaceState("", "", "/");
    router();
  }
};