
let i=1
let result = ""

while(i<=30){
    if(i===10){
        result+="ten"
    }else if(i===20){
        result+="twenty"
    }else{
        result+=i
    }
    result+=" "
    i++
}
console.log(result.trim()+".")