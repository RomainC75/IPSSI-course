function isLanguageDiverse(list) { 
    const languages = list.reduce((accu,dev)=>{
      return {
          ...accu,
          [dev.language]:dev.language in accu ? accu[dev.language]+1 : 1
        }
    },{})
    
    const values = Object.values(languages)
    return Math.max(...values)/Math.min(...values)<=2 ? true :false
}


function isLanguageDiverse(list) {
    // {'Python':3, 'Javascript':2 , 'Ruby':5}
    // [3,2,5]
    // [2,3,5]
    
    const languages = list.reduce((accu,dev)=>{
      return {
          ...accu,
          [dev.language]:dev.language in accu ? accu[dev.language]+1 : 1
        }
    },{})
    values.sort((a,b)=>a-b)
    return values[values.length-1]/values[0]<=2 ? true :false
  }