function calculateArea(r) {
    let area = 3.14 * (r ** 2)
    return area
}

function calculateCirc(r) {
    let circ = (2 * 3.14) * r
    return circ
}

function calculateWire(circ) {
    let wire = circ / 4
    return wire 
}

function circle(list) {
    for (r of list) {
        let area = calculateArea(r)
        let circ = calculateCirc(r)
        let arame = calculateWire(circ)
        console.log(`Raio: ${r}m\nArea: ${area.toFixed(2)}m\nCircunferencia:${circ.toFixed(2)}m\nArame necessário: ${arame.toFixed(2)}m\n`)
    } 
}

//input
list = [20, 45, 60, 56]
circle(list)