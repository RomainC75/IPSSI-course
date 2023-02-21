function isSameLanguage(list) {
    return list.slice(1).every(dev=>dev.language===list[0].language)
  }


  function isSameLanguage(list) {
    const mySet = new Set(list.map(dev=>dev.language))
    return mySet.size===1 ? true : false
  }