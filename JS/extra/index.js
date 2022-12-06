// 192.0.0.0
// 192.10.255.255

// console.log(`test ${i}`)

for (let h=0; h<=10 ; h++){
    for(let i=0;i<=255 ; i++){
        for(let j=0 ; j<=255 ; j++){
            console.log(`192.${h}.${i}.${j}`)
        }
    }
}