function getAverageAge(list) {
    return Math.round(list.reduce((accu,dev)=>accu+dev.age,0)/list.length)
  }
  