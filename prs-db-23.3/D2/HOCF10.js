function addUsername(list) {
    return list.map(coder=>{
      return {
        ...coder,
        username: `${coder.firstName.toLowerCase()}${coder.lastName.charAt(0).toLowerCase()}${ (new Date().getFullYear())-coder.age}`
      }
    })
  }