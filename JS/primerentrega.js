
function convertToRoman() {
    let getNum = prompt('Ingrese el número que desea convertir: ')
    const romanNums = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let acc = ''
    for(number in romanNums) {
        const numValue = romanNums[number]
        while(numValue <= getNum) {
            getNum -= numValue
            acc += number
        }
    }
    alert('El número ingresado es igual a ' + acc)
    return acc
}

convertToRoman()
