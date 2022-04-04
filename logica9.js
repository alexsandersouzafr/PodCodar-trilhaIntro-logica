input = ['UFRN', 'contest', 'AcM']
output = []

for (word of input) {
    sum = 0
    for (i = 0; i < word.length; i++) {
        // handles lowercase letters
        if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122){
            sum += word.charCodeAt(i) - 96
        }
        // handles uppercase letters
        else if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90){
            sum += word.charCodeAt(i) - 38
        }
    }
    output.push(sum)
}

// console.log(output)

function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

for (result of output) {
    if (isPrime(result)) {
        console.log("It's a prime word.")
    }
    else {
        console.log("It's not a prime word.")
    }
}