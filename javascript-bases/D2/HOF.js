const foods = ['banana', 'avocado', 'cheese']

const res = foods.map((food,i,arr)=>{

    return `${i}-${food}`
})

console.log(res)