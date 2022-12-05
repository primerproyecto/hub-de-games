//route.js

//Pages
import { template as home } from "../pages/Home";
// JUEGOS
import { template as tresEnRaya } from "../pages/TresEnRaya";
import { template as pokeapi } from "../pages/Pokeapi";
import { template as encuentraParejas } from "../pages/EncuentraParejas";
import { template as preguntas } from "../pages/Preguntas";
import { template as fakeApi } from "../pages/FakeApi";
import { template as ahorcado } from "../pages/Ahorcado";
//Components
import { listeners as headerListeners } from "../components/Header";
import { listeners as footerListeners } from "../components/Footer";
import { homelisteners } from "../pages/Home";
//Routes
export const routes = {
  "/": { title: "Home", render: home },
  "/tresenraya": { title: "Tres en raya", render: tresEnRaya },
  "/pokeapi": { title: "Pokekapi", render: pokeapi },
  "/encuentraparejas": { title: "Encuentra parejas", render: encuentraParejas },
  "/preguntas": { title: "Preguntas", render: preguntas },
  "/fakeapi": { title: "Fake api", render: fakeApi },
  "/ahorcado": { title: "Ahorcado", render: ahorcado },
};
//Router
export const router = () => {
  let page = routes[location.pathname];
  if (page) {
    document.title = page.title;
    document.querySelector("#app").innerHTML = page.render();
    headerListeners();
    footerListeners();
    
    if (page.title === "Home") homelisteners();
  } else {
    history.replaceState("", "", "/");
    router();
  }
};