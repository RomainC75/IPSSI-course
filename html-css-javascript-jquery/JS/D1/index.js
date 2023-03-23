var favoriteF = 2
console.log(favoriteF, typeof favoriteF)
favoriteF = 'Pizza'
console.log(favoriteF, typeof favoriteF)

var favoriteF = 'Steak'
console.log(favoriteF)

// erreur de calcul
const vari = 2
console.log( 2 + vari )

//Infinity
const bigN = 1e400
console.log(bigN)

let n = 1/0
console.log(n)

console.log(2**3)

// shortcut reassignation
let x=3
// x-=1
x/=2
console.log(x)

//arrondis
console.log('round : 3.5', Math.round(3.5))
console.log('floor -3.2',Math.floor(-3.2))
console.log('floor 3.9', Math.floor(3.9))
console.log('ceil 2.1', Math.ceil(2.1))
console.log('random : ', Math.random()  )

console.log(0.1 + 0.2)
// entier aléatoire
console.log(Math.round(Math.random()*10))

//min , max
console.log('min : ',Math.min(3,4,6,-22,48))
console.log('max : ',Math.max(3,4,5,-12,45))

//power
console.log('power', Math.pow(2,3), 2**3)

//STRINGS
console.log('text')
console.log("text")
const str = `line1
line2
line3 x and ${2+10}`
console.log(str, str.length)

//methods
const myName = "Romain "
console.log('Bonjour '+ myName )
console.log(myName.charAt(1))

//substr
const bigStr = "bonjour, je vais à la plage"
console.log('indexOf', bigStr.indexOf("jourlkj") )

//repeat
console.log( myName.repeat(3).trim()+"--" )

const animal1 = 'lion'
const animal2 = 'aebra'
console.log( animal1.localeCompare(animal2) )

// includes
const ans = bigStr.includes('vais')
console.log(ans)

// boolean
console.log("OR => ", true || false ) 
console.log("AND => ", true && false)

//short circuits
const shortCircuit = 1 && true
console.log("shortCircuit : ",shortCircuit)

console.log("stricte égalité", '3' == 3)

