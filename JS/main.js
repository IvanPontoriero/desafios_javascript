
const cartman = new southPark('Eric Cartman', 'Católico', 'Manipulación', 'Las drogas son malas porque si las tomas eres un hippie y los hippies son unos apestosos', 'Si Mel Gibson dice que los judíos son malos, ¡es porque ES CIERTO!', 4, 6, 15)
const kenny = new southPark('Kenneth McCormick', 'Blaintologista', 'Computación', 'Mrrph rmph rmmph mrrphh = Tetas depiladas, Inc.', '¡TODO EL TIEMPO! Muero todo el tiempo, pero ustedes, pendejos, nunca lo recuerdan', 6, 5, 12)
const stan = new southPark('Stanley Marsh', 'Católico Romano', 'Música', 'Eres una mierda y te nomino al mierda más mierda del universo.', '¡Oh Dios mío, mataron a Kenny!', 6, 6, 11)
const kyle = new southPark('Kyle Broflovski', 'Judío', 'Conocimiento del Universo', 'Los animales matan, y los que no lo hacen son animales estúpidos, como las tortugas y demás', '¡Hijos de puta!', 7, 5, 13)

cartman.elegirPersonaje()
kenny.elegirPersonaje()
stan.elegirPersonaje()
kyle.elegirPersonaje()

cartman.atacar(kyle)
kyle.atacar(cartman)
cartman.atacar(kyle)
kyle.atacar(cartman)
cartman.atacar(kyle)
cartman.speak(kyle)
kyle.atacar(cartman)
kyle.ganador()