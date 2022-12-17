import { data } from "../data/data";

export const template = () =>  `
    <section class="wakatopo">
        <h2>Whaka topo 👋🏻 <span id="aciertos"></span></h2>
        <button id="btn-empezar">Empezar</button>
        <button id="btn-detener">Detener</button>
        <div id="wakatopo-wrapper" style="width:100%; height: auto;">
            <div class="circulos">
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
            </div>
            
        </div>
    </section>`
;

const creacionDeJuego = () => {
    const $wakatopo = document.querySelector('#wakatopo-wrapper');
    const $contador = document.querySelector('#aciertos');
    const $btnEmpezar = document.querySelector('#btn-empezar')
    const $btnDetener = document.querySelector('#btn-detener')
    
    // EMPEZAMOS JUEGO
    $btnEmpezar.addEventListener('click', crearIntervaloDeUnSegundo)
    // DETENER JUEGO
    $btnDetener.addEventListener('click', () => {
        clearInterval(intervalID);
    })
    
    
    $contador.innerHTML = 0

    const golpear = (e) => {
        if(e.target.classList.contains('gusano')){
            $contador.innerHTML++
        }
    }
    $wakatopo.addEventListener('click', golpear);

    
    ;
    
}
const gusano = () => {
    const $gusano = document.createElement('div');
    $gusano.classList.add('circulo')
    $gusano.innerHTML = `
    <div id="gusano" class="gusano">
        <div></div>
        <div></div>
    </div>`
    return $gusano
}
/* const intervalo = ()=> {
    
    
    setInterval(() => {
        const $circulos = Array.from(document.querySelectorAll('.circulo'));
        $circulos.forEach( circulo => {
            circulo.innerHTML = ''
        })
        $circulos.innerHTML = ''
        const numeroAleatorio = Math.floor(Math.random() * $circulos.length + 1);
        $circulos[numeroAleatorio].append(gusano())
    }, 2000);
}

const stopTextColor = () => {
    clearInterval(intervalo);

} */


// Variables que almacenan el ID del timeout y el tiempo que ha transcurrido
var intervalID; 
var segundos = 0;

// Función que crea el timeout
function crearIntervaloDeUnSegundo() {
    
	intervalID = setInterval(imprimirAumentarTiempo, 1000); 
}

// Función que muestra un alert
function imprimirAumentarTiempo() {
    const $circulos = Array.from(document.querySelectorAll('.circulo'));
        $circulos.forEach( circulo => {
            circulo.innerHTML = ''
        })
        $circulos.innerHTML = ''
        const numeroAleatorio = Math.floor(Math.random() * $circulos.length + 1);
        $circulos[numeroAleatorio].append(gusano())
  segundos++;
}

// Llamamos a la función que crea el timeout



export const listeners = () => {
    creacionDeJuego()
}