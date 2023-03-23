function sortByLanguage(list) {
    list.sort((a,b)=>a.firstName.localeCompare(b.firstName))
    return list.sort((a,b)=>a.language.localeCompare(b.language))
  }

  function sortByLanguage(list) {
    return list.sort((a,b)=>{
      return a.language===b.language ? a.firstName.localeCompare(b.firstName) : a.language.localeCompare(b.language)
    })
  }


  