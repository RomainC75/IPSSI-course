let i = 1
let str = ""

while (i<=30){
    if(i===10){
        str += "ten"
    }else if(i===20){
        str += "twenty"
    }else{
        str += `${i}`
    }
    str+=" "
    i++
}
console.log(str.trim() )