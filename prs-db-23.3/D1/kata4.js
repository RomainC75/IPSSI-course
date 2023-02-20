const orderedCount = function (text) {
    const resultArr = []
    Array.from(text).forEach(letter=>{
      const foundIndex = resultArr.findIndex(entry=>entry[0]===letter)
      if(foundIndex===-1){
        resultArr.push([letter,1])
      }else{
        resultArr[foundIndex][1]+=1
      }
    })
    return resultArr;
  }

  const orderedCountMap = function (text) {
    console.log('text : ', text)
    const newSet = new Set(Array.from(text))
    console.log('newSet : ', newSet)
    const uniqueLetters = Array.from(newSet)
    console.log("uniqueLetters", uniqueLetters)
    return uniqueLetters.map(letter=>{
      const count = text.split("").reduce((accu,current)=>{
        return letter===current ? accu+1 : accu
      },0)
      return [letter,count]
    })
   }

