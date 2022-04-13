// Class code examples

// Objects as namespaces (you can reuse the same lable across variables)

const firstName1="Chee Kean"
const weight1 = 231
const height1=1.7

const firstName2 = "Marco Santo"
const weight = 231
const height = 1.7

let firstName3 = "Carlitro"
let weight3=  231
let height3 = 1.7


let firstName4 = "Caroluna"
let weight4=  231
let height4 = 1.7

// Using objects
const person1 = {
    firstName : "Chee Kean",
    weight : 231,
    height : 1.7
}

const person2 = {
    firstName : "Marco Santo",
    weight : 231,
    height: 1.7
}


const person3 = {
    firstName : "Chee Kean",
    weight : 231,
    height : 1.7
}

const person4 = {
    firstName : "Marco Santo",
    weight : 231,
    height: 1.7
}

// Object.length does not exist!
console.log("Object lenght does not exist", person1.length)

// Accessing a property with dot notation
console.log(
    person1.firstName,
    person1.weight
)


// Accessing a property with bracket notation (indirect acces, or dynamic)
console.log(person1["weight"])


const personKey = ["firstName", "weight", "height" ]

for(key of personKey){
    console.log(`person1 ${key}: `, person1[key])
}

person2.nationality = "Italian"


person1["favFood"] = "pizza"

console.log(person2.favFood)

const newKey = `favourite book`
person1[newKey] = "Hickhiker\'s guide to the galaxy"

console.log("person2: ", person2)

for (key in person2) console.log(person2[key])

// Object.keys(person2)
for (key of Object.keys(person2)) console.log(person2[key])

console.log("Reading index from keys", Object.keys(person1)[1])

const tween1 = {
    name: "Carlos",
    age: 24
}

const tween2 = {
    name: "Carlos",
    age: 24
}

console.log(
    tween1 === tween2,
    "Carlos" === "Carlos"
    )


    const person = {
        name: 'German',
        lastName: 'Alvarez',
        address: {
            street: 'García Luna',
            neighbourhood: 'Prospe',
            postalCode: 28002
        },
        hobbies: ['sky', 'coding', 'beer', 'rave'],
        age: 35,
        height: 1.7
    }


    // Access (getter)
    console.log(`My name is ${person.name} ${person['lastName']} and I live in ${person.address.neighbourhood}`)

    console.log('My hobbies are:')
    for (let i = 0; i < person.hobbies.length; i++) {
        console.log(`I like: ${person.hobbies[i]}`)
    }

    // Access (setter)
    person.age = 36
    console.log('Now I am', person.age, 'years old')


    // Object extension
    person.weight = 80
    console.log('My weight is ', person.weight, ' kilos')

    // Object keys
    console.log('The object keys are:', Object.keys(person))

    // Object values
    console.log('The object values are:', Object.values(person))

