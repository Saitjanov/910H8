let user = {
    name: 'Timur',
    surname: 'Saitjanov',
    age: 17, 
    grnder: 'male', 
    xobi: 'footbal',
    passport: {
        serries: 'AC',
        number: 00000077777,
        date: 2022,
    },
    business: ['Restauran', 'Super Market', 'Dabai Mall'],
    wives: ['Jorjinyo Radriges', 'Antonella'],
    friends: ['Ronaldo', 'Messi', 'Neymar']
}

let look = {
    hairColor: 'black',
    eyeColor: 'black',
    growth: '183',
    growth: 70,
}

let types = {
    string: [],
    number: [],
    object: [],
    boolean: [],
}

let newAsign = Object.assign({}, user, look)
let keyy = Object.keys(newAsign)
let val = Object.values(newAsign)
let NewNew = Object.assign({}, keyy, val)