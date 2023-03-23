const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
    ];

students.forEach(student=>{
    if(student.name==="Sarah"){
        console.log(`Sarah is ${student.age} `)
    }
})

// for(let i=0 ; i<students.length; i++){
//     if(students[i].name==="Sarah"){
//         console.log(`Sarah is ${students[i].age} `)
//     }
// }