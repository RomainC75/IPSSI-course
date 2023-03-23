const arrCheckFor = values => {
    for(let i=0 ; i<values.length; i++){
      if(!Array.isArray(values[i])){
        return false
      }
    }
    return true
  }

const arrCheckForEach = values => {
    let res = true
    values.forEach(value=>{
      if(!Array.isArray(value)){
        res=false
        return
      }
    })
    return res
  }

  const arrCheckForEvery = values => {
    return values.every(value=>Array.isArray(value))

  }