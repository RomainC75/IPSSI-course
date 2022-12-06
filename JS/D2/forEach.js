const arr = ['Bob', 'Franklin', 'Kone', 'Castor44']

arr.forEach( function(fName,i,ar){
    if(i%2==0){
        console.log(i,fName, ar)
    }
})