
function fn(para){
//...
}

const sumNumbers = (array) =>{
    let sum =0
    // iteration
    // array.forEach(element => {
    //     sum+=element
    // });
    for(let i=0 ; i<array.length ; i++){
        sum+=array[i]
    }
    return sum
}
const average = (array)=>{
    return sumNumbers(array)/array.length
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const sum = sumNumbers(numbers)
const avg = average(numbers)
console.log(sum, avg)
