console.log("xxxxx")
let cat = document.getElementById('cat');
console.log("==>",cat)

const mousesByClass = document.getElementsByClassName("mouse")
console.log("mousesByClass",mousesByClass)
Array.from(mousesByClass).forEach(mouse=>{
    mouse.addEventListener("click",()=>{
        const actualBg = getComputedStyle(mouse).backgroundColor
        console.log("actualBg, ", actualBg)
    })
})

const mouse = document.querySelector(".mouse")
mouse.addEventListener("click",()=>{
    console.log("click")
})

const mouses = document.querySelectorAll(".mouse")
console.log("=> querySelectorAll : mouse", mouses)

Array.from(mouses).forEach(mouse=>{
    console.log("mouses forEach : ", mouse)
})

console.log(Array.from("mlksjdf"))