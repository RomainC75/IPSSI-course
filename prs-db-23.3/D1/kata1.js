



function sortArray(a1, a2) {
    return a1.map(wordA1=>{
      return a2.find(wordA2=>wordA2[0]===wordA1[0])
    })
  }