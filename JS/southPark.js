/*  DESAFÍO #1
let userName = prompt('Ingresa tu nombre: ');

let userLastName = prompt('Ingresa tu apellido: ');

alert('Felicitaciones ' + userName + ' ' + userLastName + '!' + ' Bienvenido a mi sitio de pruebas ;)'); 
*/

/* DESAFÍO #2
let asentamientoEnMarte = parseInt(prompt('Ingrese el año en el que estamos: '));

if (asentamientoEnMarte <= 2033) {
    alert('¡Estás a tiempo de aplicar para viajar al espacio!')
} else if (asentamientoEnMarte > 2033 && asentamientoEnMarte < 2055) {
    alert('Estás viejo... Pero no taaan viejo!')
} else {
    alert('Tu tiempo ya pasó compañero.')
}
*/

/* DESAFÍO #3 

let n = [0, 1]

for(let i = 2; i <= 15; i++) {
    n[i] = n[i - 2] + n[i - 1];
    console.log(n[i]);
    if(n[i] === 34) {
        console.log('Felicidades! Has llegado a la décima de Fibonacci');
    }
};
*/

/* 

Algoritmo para hallar el logaritmo neperiano de un número ingresado por el usuario

function logaritmoNeperiano() {
    let num = Number(prompt('Ingrese un numero: '))
    return Math.log(num);
}

let logNeperiano = logaritmoNeperiano();
console.log(logNeperiano);

DESAFÍO #4

let celsius = Number(prompt('Ingrese la temperatura actual en grados Celsius: '))

function fahrenheit() {
    return 1.8 * celsius + 32;
}

function kelvin() {
    return celsius + 273.15;
}

alert('La temperatura actual en grados Fahrenheit es ' + fahrenheit())
alert('La temperatura actual en grados Kelvin es ' + kelvin())
*/

/* DESAFÍO #4 COMPLEMENTARIO 

alert('¿Tenés ganas de tirarte a ver algo y no sabés qué? Nosotros te ayudamos!')

function pedirTiempo() {
    let tiempo = Number(prompt('¿Cuánto tiempo tenés disponible?'))
    return tiempo
}

function pedirGenero() {
    let genero = prompt('Elegí un género entre los siguientes(ingresa un número): \n 1. Sci-Fi \n 2. Horror \n 3. Comedy')
    return genero
}

function mostrarPelicula() {
    if (tiempo <= 1 && (genero == 1 || genero == 2 || genero == 3)) {
        alert('Te recomendamos alguna de las siguientes series: \n Star Trek: Enterprise (Sci-Fi) \n Slasher (Horror) \n Modern Family (Comedy/Sitcom)')
    } else if (tiempo > 1 && tiempo < 2 && genero == 1) {
        alert('Te recomendamos ver: \n INFINITE \n The Fly (1986) \n Alien - El octavo pasajero')
    } else if (tiempo > 1 && tiempo < 2 && genero == 2) {
        alert('Te recomendamos ver: \n Expediente Warren: El diablo me obligó a hacerlo \n The Texas Chain Saw Massacre \n El proyecto de la bruja de Blair')
    } else if (tiempo >= 2 && genero == 3) {
        alert('Te recomendamos ver: \n ¿Qué pasó ayer? \n American Pie (1999) \n The Cable Guy')
    } else if (tiempo >= 2 && genero == 1) {
        alert('Te recomendamos ver: \n Star Wars: Episode VI - Return of the Jedi \n Star Trek: The Motion Picture (1979) \n 2001: A Space Odyssey')
    } else if (tiempo >= 2 && genero == 2) {
        alert('Te recomendamos ver: \n El Exorcista \n Hereditary \n El Resplandor')
    } else if (tiempo >= 2 && genero == 3) {
        alert('Te recomendamos ver: \n Notting Hill \n Green Book \n As Good as It Gets')
    } else {
        alert('Ingrese un valor válido')
    }
}

let tiempo = pedirTiempo()
let genero = pedirGenero()
mostrarPelicula()
*/


/* OBJECTS
function AverageEngineer(cualidad, gustos, estadoCivil, relacionesSociales) {
    this.cualidad = cualidad;
    this.gustos = gustos;
    this.estadoCivil = estadoCivil;
    this.relacionesSociales = relacionesSociales
}

const ingeniero1 = new AverageEngineer('Pretencioso', 'Astrofísica', 'Forever Alone', false);
const ingeniero2 = new AverageEngineer('Introvertido', 'Sistemas', 'Intentan2 superarla', true);

ingeniero2.relacionesSociales = false;

console.log(ingeniero1.cualidad);
console.log(ingeniero2.gustos);
*/

/* DESAFÍO #5 */

class southPark {
    constructor(nombre, religion, talento, frase1, frase2, ataque, defensa, vida) {
        this.nombre = nombre
        this.religion = religion
        this.talento = talento
        this.frase1 = frase1
        this.frase2 = frase2
        this.ataque = ataque
        this.defensa = defensa
        this.vida = vida
    }

    elegirPersonaje() {
        console.log('Personaje: ' + this.nombre + '\n Religión: ' + this.religion + '\n Habilidad: ' + this.talento)
    }

    speak(atacante) {
        console.log('Maldito ' + atacante.nombre + '!')
    }

    atacar(atacado) {
        console.log(this.nombre + ' hizo un daño de ' + this.ataque + ' a ' + atacado.nombre)
        atacado.recibirAtaque(this.ataque)
    }

    recibirAtaque(daño) {
        this.vida -= daño
        if(this.vida <= 0 ) {
            console.log(this.nombre + ' ha sido jodido')
            console.log(this.frase2);
        } else {
            console.log(this.nombre + ' sigue vivo')
            console.log(this.frase1);
        }
    }

    ganador(){
        console.log(this.nombre + ' es el ganador de esta batalla.')
    }
}


