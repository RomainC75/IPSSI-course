const arr= [3,4,5]

const res = arr.reduce((accu,current)=>{
    console.log(`accu : ${accu} // current : ${current}`)
    return [current].concat(accu)
},[])

console.log('final accu', res)