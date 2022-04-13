// Class code examples

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

let firstName3 = "Carlos Max"
let weight3=  231
let height3 = 1.7


let firstName4 = "Caroluna"
let weight4=  231
let height4 = 1.7

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

person1.nationality = "Italian"

console.log(person1.favFood)

person1["favFood"] = "pizza"

const newKey = `favourite book`
person1[newKey] = "guide to galaxy"

console.log("person1: ", person1)

for (key in person1) console.log(person1[key])

// Object.keys(person1)
for (key of Object.keys(person1)) console.log(person1[key])

console.log("accessing a number", person1[1087643])

console.log("reading index from keys", Object.keys(person1)[1])
console.log("object lenght", person1.length)

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