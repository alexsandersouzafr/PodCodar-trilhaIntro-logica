client = {
    age: 20,
    stage: '',
    gender: 'm',
    fullcovering: true,
    initialvalue: 0,
    finalvalue: 0
}

// define stage of life
age = client.age
if (age >= 18 && age <= 24) {
    client.stage = 'young'
}
else if (age >=25 && age <= 55) {
    client.stage = 'adult'
}
else if (age >= 56 && age <= 120) {
    client.stage = 'old'
}

// define initial value
if (client.fullrecovering) {
    client.initialvalue = 800
}
else {
    client.initialvalue = 500
}

// get final value
if (client.gender === 'f' && clieng.stage !== 'old') {
    client.finalvalue = client.initialvalue - ((client.initialvalue / 100) * 5)
}

if (client.gender === 'm' && client.stage === 'young') {
    client.finalvalue = client.initialvalue + ((client.initialvalue / 100) * 7)
}

if (client.stage === 'old') {
    client.finalvalue = client.initialvalue + ((client.initialvalue / 100) * 9)
}

console.log(client.finalvalue.toFixed(2))