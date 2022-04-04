triangle = [4, 5, 1]

sidesum = 0

for (side of triangle) {
    sidesum += side
}

for (side of triangle) {
    if (side === sidesum) {
        console.log('not a triangle')
    }
}

if (triangle[0] === triangle [1]) {
        if (triangle[1] === triangle[2]) {
            console.log('equilatero')
        }
    }

if (triangle[0] === triangle[1]) {
    if (triangle[1] !== triangle[2]){
        console.log('isósceles')
    }    
}

if (triangle[0] === triangle[2]) {
    if (triangle[2] !== triangle[1]){
        console.log('isósceles')
    }    
}

if (triangle[0] !== triangle [1] && triangle[0] !== triangle[2] && triangle[2] !== triangle[1]) {
    console.log('escaleno')
}
