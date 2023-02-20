let pal1 = "A man, a plan, a canal, Panama!"
let pal2 = "Amor, Romas"

pal2=pal2.toLowerCase()
console.log(pal2)
pal2 = pal2.replaceAll(' ','')
pal2 = pal2.replaceAll(',','')
pal2 = pal2.replaceAll('!','')
console.log(pal2)

const pal2bis = pal2.split('').reverse().join('')
console.log(pal2bis)
if(pal2===pal2bis){
    console.log("c'est un palindrome")
}

let j=pal2.length-1
for(let i=0;i<pal2.length;i++){
    if(pal2[i]!==pal2[j]){
        console.log("ce n'est pas un palindrome !")
        break
    }
    j--
}
