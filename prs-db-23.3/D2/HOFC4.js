function getFirstPython(list) {
    const foundDev = list.find(el=>el.language==='Python')
    return foundDev ? `${foundDev.firstName}, ${foundDev.country}` : "There will be no Python developers"
  }


  function getFirstPython(list) {
    const foundDev = list.reduce((accu,dev)=>{
      if(accu){return accu}
      if(dev.language==='Python'){
        return dev
      }
    },undefined)
    return foundDev ? `${foundDev.firstName}, ${foundDev.country}` : "There will be no Python developers"
  }


  function getFirstPython(list) {
    const foundDev = list.reduce((accu,dev)=>{
      if(accu){return accu}
      if(dev.language==='Python'){
        return `${dev.firstName}, ${dev.country}`
      }
    },undefined)
    return foundDev ? foundDev : "There will be no Python developers"
  }