function allContinents(list) {
    const continents = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ]
    return continents.every(continent=>{
      // return list.map(dev=>dev.continent).includes(continent)
      return list.find(dev=>dev.continent===continent)
    })
  }


  
  function allContinents(list) {
    return new Set(list.map(dev=>dev.continent)).size===5 ? true : false
  }



  function allContinents(list) {
    return new Set(list.map(dev=>dev.continent)).size===5 
  }