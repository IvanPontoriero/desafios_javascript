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
        let elegir = Number(prompt('Con qué personaje querés atacar? \n 1. Eric Cartman \n 2.Kenny McCormick \n 3. Stan Marsh \n 4. Kyle Broflovski \n (Ingrese un número)'))
        return elegir
    }

    speak() {
        console.log('Maldito! Elegiste a ' + this.nombre)
    }

    atacarPersonaje() {
        let attack = Number(prompt('A que personaje deseas atacar? \n 1. Eric Cartman \n 2.Kenny McCormick \n 3. Stan Marsh \n 4. Kyle Broflovski \n (Ingrese un número)'))
        return attack
    }

    atacar(atacado) {
        console.log(this.nombre + ' hizo un daño de ' + this.ataque + ' a ' + atacado.nombre)
        atacado.recibirAtaque(this.ataque)
        console.log(this.frase1)
    }

    recibirAtaque(daño) {
        this.vida -= daño
        if(this.vida <= 0 ) {
            console.log(this.nombre + ' fue jodido.');
        } else {
            console.log(this.nombre + ' sigue vivo.');
        }
        console.log(this.frase2)
    }

    frases() {
        if(this.vida > 1) {

        }
    }
}

function personaje() {
    switch (elegir) {
        case 1:
            cartman.speak()
            break
        case 2:
            kenny.speak()
            break
        case 3:
            stan.speak()
            break
        case 4:
            kyle.speak()
            break
        default:
            console.log('Ingrese un número válido')
            break
    }
    
}
function ataque() {
    switch (attack) {
        case 1:
            cartman.atacar(attack)
            break
        case 2:
            kenny.atacar(attack)
            break
        case 3:
            stan.atacar(attack)
            break
        case 4:
            kyle.atacar(attack)
            break
        default:
            console.log('Ingrese un número válido')
            break
    }
    
}

const cartman = new southPark('Eric Cartman', 'Católico', 'Manipulación', 'Las drogas son malas porque si las tomas eres un hippie y los hippies son unos apestosos', 'Si Mel Gibson dice que los judíos son malos, ¡es porque ES CIERTO!', 4, 6, 15)
const kenny = new southPark('Kenneth McCormick', 'Blaintologista', 'Computación', 'Mrrph rmph rmmph mrrphh = Tetas depiladas, Inc.', '¡TODO EL TIEMPO! Muero todo el tiempo, pero ustedes, pendejos, nunca lo recuerdan', 6, 5, 12)
const stan = new southPark('Stanley Marsh', 'Católico Romano', 'Música', 'Eres una mierda y te nomino al mierda más mierda del universo.', '¡Oh Dios mío, mataron a Kenny!', 6, 6, 11)
const kyle = new southPark('Kyle Broflovski', 'Judío', 'Conocimiento del Universo', '¡Hijos de puta!', 'Oh Dios Mío, maté a Kenny!, ¡Hijo de puta!', 7, 5, 13)

let elegir = cartman.elegirPersonaje()
personaje()
let attack = cartman.atacarPersonaje(kyle)
ataque()
