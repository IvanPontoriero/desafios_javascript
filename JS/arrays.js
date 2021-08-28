/*
class musicaNueva {
    constructor(nombre, album, año){
        this.nombre = nombre
        this.album = album
        this.año = año
    }
}
let musiquita = [
    {nombre: 'Mac Miller', album: 'Watching Movies With The Sound Off', año: 2013},
    {nombre: 'Asking Alexandria', album: 'Stand Up and Scream', año: 2009},
    {nombre: 'Jennifer López', album: 'Love?', año: 2011}, 
    {nombre: 'Illya Kuryaki & the Valderramas', album: 'Chaco', año: 1995},
    {nombre:'Fósiles', album: 'Perdí', año: 2019},
    {nombre: 'Stevie Wonder', album: 'Songs In The Key Of Life', año: 1976}
]

console.log(musiquita)

for(const musica of musiquita) {
    console.log('Añadir ' + musica.album + ' de ' + musica.nombre + ' año ' + musica.año + ' a 16840 Js')
}

const filter = musiquita.filter(discos => discos.año >= 2010)
console.log('Espera! A la camada no le gusta la musica posterior al 2010!')
for(const discos of filter) {
    console.log('Elimina el disco ' + discos.album)
}

musiquita.splice(0, 1)
musiquita.splice(1, 1)
musiquita.splice(2, 1)

console.log(musiquita)

console.log('Perfecto! Ahora se añade un artista que a todxs nos gusta.')

musiquita.push(new musicaNueva('Luis ALberto Spinetta', 'Silver Sorgo', 2001))
 
console.log(musiquita)
*/

let eventosHistoricos = [
    {suceso: 'Bombardeos en Hiroshima y Nagasaki', lugar: 'Japón', año: 1945},
    {suceso: 'Asesinato John F. Kennedy', lugar: 'Dallas, Estados Unidos', año: 1963},
    {suceso: 'Atentado a las Torres Gemelas', lugar: 'New York, Estados Unidos', año: 2001},
    {suceso: 'Caída del Muro de Berlín', lugar: 'Berlín, Alemania', año: 1989},
    {suceso: 'Alunizaje del Apolo 11', lugar: 'Luna', año: 1969},
    {suceso: 'World Wide Web', lugar: 'Ginebra, Suiza', año: 1991}
]

console.log(eventosHistoricos)

/* Intento de Ordenamiento Burbuja
for(let i = 0; i < eventosHistoricos.length; i++) {
    for(let j = i + 1; j < eventosHistoricos.length; j++) {
        if(eventosHistoricos.año[j] > eventosHistoricos.año[j + 1]) {
            let tmp = eventosHistoricos[j]
            eventosHistoricos[j] = eventosHistoricos[j + 1]
            eventosHistoricos[j + 1] = tmp
        }    
    }
}
*/

eventosHistoricos.sort((a, b) => {
    return a.año - b.año
})

console.log(eventosHistoricos)