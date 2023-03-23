console.log('Hello world ! ')

// commentaires
/*
Commentaire
multiligne

*/
var myVariable
console.log('==>',myVariable)
var myVariable = "Mon nom"
console.log("myVariable",myVariable,'!',`...`)
myVariable= 13
console.log(`${myVariable} est de type ${typeof myVariable}`)
myVariable= "13"
console.log(`${myVariable} est de type ${typeof myVariable}`)

// const mySecVariable
// console.log("mySecVariable",mySecVariable)


// Number
const age = 34
const average = 34.2
const result = age-average
console.log('result : ', result)


console.log('=>',age*"string")

const floatNumber = 3.909873487
console.log('floor',Math.floor(floatNumber))
console.log('ceil',Math.ceil(floatNumber))
console.log('round',Math.round(floatNumber))
console.log('toFixed(2)',floatNumber.toFixed(4))

const randomInt = Math.floor(Math.random()*10)
console.log('Random : ', randomInt)

console.log("min", Math.min(3,4,5,2))
console.log("min", Math.max(3,4,5,2))

console.log("power", Math.pow(2,3))
console.log("power * ", 2**3)

const myString = "Bonjour!"
console.log(`${myString} est de longueur : ${myString.length}`)
console.log("caractère à l'index 2 : ",myString.charAt(2))
console.log("substring", myString.indexOf("nj"))


console.log("3=='3' ? ", 3=='3')
console.log("3==='3' ? ", 3==='3')

console.log("null == undefined", null==undefined)
console.log("null === undefined", null===undefined)
