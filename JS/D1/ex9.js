let phraseToCheck = "Amor, Roma"

let minifiedPhrase = phraseToCheck.replace(",","")
minifiedPhrase =  minifiedPhrase.replace(" ","")
minifiedPhrase =  minifiedPhrase.replace("!","")
console.log("minified Phrase : ", minifiedPhrase)
let j=0
let isPala = true

for(let i=minifiedPhrase.length-1; i>=0 ; i--){
    console.log(minifiedPhrase[i], minifiedPhrase[j])
    if( minifiedPhrase[i].toLowerCase() != minifiedPhrase[j].toLocaleLowerCase()){
        isPala=false
        break
    }
    j++
}

if (isPala){
    console.log(`${phraseToCheck} is a palindrome`)
}else{
    console.log(`${phraseToCheck} is NOT a palindrome`)
}

const val = fn(param)