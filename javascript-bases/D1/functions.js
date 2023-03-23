function maxOfTwoNumbersBasic (n1, n2) {
    if(n1>n2){
        return n1
    }
    return n2
}

function maxOfTwoNumbersTernary (n1, n2) {
    return n1>n2 ? n1 : n2
}


function maxOfTwoNumbersMax (n1, n2) {
    return Math.max(n1,n2)
}

const maxOfTwoNumbers = (n1, n2) =>{
    return Math.max(n1,n2)
}

const result = maxOfTwoNumbers(243,2)
console.log('result : ', result)