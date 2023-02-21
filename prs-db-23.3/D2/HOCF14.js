function orderFood(list) {
    return list.reduce((accu,dev)=>{
      return {
        ...accu,
        [dev.meal]: (dev.meal in accu) ? ++accu[dev.meal] : 1
      }
    },{})
  }