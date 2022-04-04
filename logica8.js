nwords = 8
words = ['a', 'belo', 'fiNo', 'Cruz', 'flor', 'batata', 'abracadabra', 'aaaabc']
answer = []

// populate answers
for (word of words) {
    word = word.toLowerCase()
    if (word.length === 1) {
        answer.push('O')
    }
    else {
        for (i = 0; i <= word.length; i++) {

            // compara a letra atual com a próxima usando o ASCI
            if (word.charCodeAt(i) < word.charCodeAt(i + 1)) {
                if (i === word.length - 2) {
                    answer.push('O')
                    break
                }
            }
            else {
                answer.push('N')
                break
            }
        } 
    }
}

for (i = 0; i < nwords; i++) {
    console.log(`${words[i]}: ${answer[i]}`)
}