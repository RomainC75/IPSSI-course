function countLanguages(list) {
    const result = {}
    list.forEach(dev=>{
      if( dev.language in result){
        result[dev.language]++
      }else{
        result[dev.language]=1
      }
    })
    return result
  }


  function countLanguages(list) {
    const register = new Set(list.map(dev=>dev.language))
    const obj = {}
    register.forEach(language=>{
      obj[language]=list.filter(dev=>dev.language===language).length
    })
    return obj
  }