function findOddNames(list) {
    return list.filter(dev=>{
      const sum = Array.from(dev.firstName).reduce((accu,letter)=>accu+letter.charCodeAt(),0)
      return sum%2
    })
  }