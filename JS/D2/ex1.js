
function maxOfTwoNumber(a,b){
    if(a==b){
        return null
    }
    if(a>b){
        return a
    }
    return b

}

// console.log(value)
console.log( maxOfTwoNumber(-2,0) )
if( maxOfTwoNumber(-2,0) ){
    console.log("egalité")
}