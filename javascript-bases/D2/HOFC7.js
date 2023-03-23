function findSenior(list) {
    list.sort((devA,devB)=>devB.age-devA.age)
    return list.filter(dev=>dev.age===list[0].age)
  }


  function findSenior(list) {
    const maxAge= Math.max(...list.map(dev=>dev.age))
    return list.filter(dev=>dev.age===maxAge)
  }


  function findSenior(list) {
    return list.slice(1).reduce((accu, dev)=>{
      if(dev.age > accu[0].age){
        return [dev]
      }
      if(dev.age === accu[0].age){
        return [...accu,dev]
      }
      return accu
    },[list[0]])
  }
  