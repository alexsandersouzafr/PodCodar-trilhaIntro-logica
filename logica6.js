p1 = [5, 4, 5, 8, 8, 7]
p2 = [2, 2, 1, 5, 9, 3]
p1victories = 0
p2victories = 0


for (i = 0; i < p1.length; i++) {
    sum = p1[i] + p2[i]
    if (sum % 2 == 0) {
        p1victories++ 
    }
    else {
        p2victories++
    }
}

if (p1victories > p2victories) {
    console.log('PRIMEIRO')
}
else if (p2victories > p1victories) {
    console.log('SEGUNDO')
}
else {
    console.log('EMPATE')
}