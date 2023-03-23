const avg = (array) =>{
    let sum = 0
    array.forEach(element => {
        console.log(element, typeof element)
        if(typeof element === "number"){
            sum+=element
        }else if(typeof element === "string"){
            sum+=element.length
        }else if(typeof element === "boolean" && element){
            sum+=1
        }
    });
    return 
    
}

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const average = avg(mixedArr)
// should return: 5.7
console.log(average)
