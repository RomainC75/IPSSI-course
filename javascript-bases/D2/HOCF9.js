function isAgeDiverse(list) {
    const ageRange = new Array(10).fill(false)
    
    list.forEach(dev=>{
      let corresIndex = Math.floor(dev.age/10)-1
      if(corresIndex>=9){corresIndex=9}
      ageRange[corresIndex]=true
    })
    return ageRange.every(val=>val)
  }


  function isAgeDiverse(list) {
    let ageRange = new Array(10).fill(false)
    ageRange = ageRange.map((isPresent,index)=>{
      const range=index+1
      return list.some(dev=>{
        const age = dev.age > 100 ? 100 : dev.age
        return Math.floor(age/10)===range
      })
    })
    return ageRange.every(val=>val)
  }

// Cherif
  function isAgeDiverse(list) {
    let res = list.map(dev => {
      let value = Math.floor(dev.age / 10);
      value = (value > 10) ? 10 : value;
      return value;
    }).filter(range=>range>0)
    let result = Array.from(new Set(res)) ;  
    for(let i = 1; i <= 10; i++){
      if(!result.includes(i)){
        return false;
      }
    }
    return true;
  }

  function isAgeDiverse(list) {
    const res = list.map(dev => {
      let value = Math.floor(dev.age / 10);
      return (value > 10) ? 10 : value;
    }).filter(range=>range>0)
    return new Set(res).size ===10 
  }