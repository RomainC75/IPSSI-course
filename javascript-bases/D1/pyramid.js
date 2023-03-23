const printLine = (starNumber,space) =>{
    console.log(" ".repeat(space)+"*".repeat(starNumber))
}

[1,2,3,4,5].forEach(starNumber=>{
    printLine(starNumber,5-starNumber)
})