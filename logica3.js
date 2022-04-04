weight = 103
height = 1.73
gender = 'm'

imc = weight / (height ** 2)
console.log(imc.toFixed(1))

if (gender === 'f') {
    if (imc < 19.1) {
        console.log('abaixo do peso')
    }
    else if (imc >= 19.1 && imc < 25.8) {
        console.log('peso normal')
    }
    else if (imc >= 25.8 && imc < 27.3) {
        console.log('pouco acima do peso')
    }
    else if (imc >= 27.3 && imc < 32.3) {
        console.log('acima do peso ideal')
    }
    else if (imc > 32.3) {
        console.log('obeso')
    }
}
else if (gender === 'm') {
    if (imc < 20.7) {
        console.log('abaixo do peso')
    }
    else if (imc >= 20.7 && imc < 26.4) {
        console.log('peso normal')
    }
    else if (imc >= 26.4 && imc < 27.8) {
        console.log('pouco acima do peso')
    }
    else if (imc >= 27.8 && imc < 31.1) {
        console.log('acima do peso ideal')
    }
    else if (imc > 31.1) {
        console.log('obeso')
    }
}
else {
    console.log('invalid gender')
}