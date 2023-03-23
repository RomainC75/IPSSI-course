const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (numbers) => {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum
};

console.log("sumNumbers : ", sumNumbers(numbers));

const sumNumbersReduce = (numbers) =>{
    // return numbers.reduce((accu,current)=>{
    //     console.log(`accu : ${accu} // current : ${current}`)
    //     return accu+current
    // },0)
    return numbers.reduce((accu,current)=> accu+current,0)
}

console.log("sumNumbersReduce : ", sumNumbersReduce(numbers))

// MIXED

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// console.log(typeof mixedArr[0])
// console.log(typeof mixedArr[2])
// console.log(typeof mixedArr[4])

const sumMixedDataWithReduce = (arr) =>{
    return arr.reduce((accu, current)=>{
        if(typeof current==='string'){
            return accu+current.length
        }else if(typeof current==='boolean' ){
            return accu + (current ? 1 : 0)
        }
        return accu+current
    },0)
}

const avg = (arr) =>{
    return sumMixedDataWithReduce(arr)/arr.length
}

console.log('Mixed : ', sumMixedDataWithReduce(mixedArr))
console.log('Mixed : ', avg(mixedArr))

