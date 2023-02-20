const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into et electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more et recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let space = 0

for(let char of text){
    if(char===" "){
        space++
    }
}
console.log(`text contient ${space} mots`)

let count=0

for(let i=1 ; i<text.length-1 ; i++){
    if(text[i-1]===' ' && text[i]==='e' && text[i+1]==='t'){
        count++
    }
}
console.log('basic "et" count : ',count)


let etCount=0
for(let i=0 ; i<text.length-1 ; i++){
    const sub = text.substring(i,i+4)
    if(sub===" et "){
        etCount++
    }
}
console.log("count(substr) : ",etCount)

const arr = text.split(" ")

console.log(arr)
const filtered = arr.filter( (word)=>{
    return word==='et'
})
console.log('et count (filter) : ', filtered.length)