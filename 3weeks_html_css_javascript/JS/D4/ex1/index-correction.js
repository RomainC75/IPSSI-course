const  cat = document.getElementById('cat');

const mouses = Array.from(document.getElementsByClassName("mouse"))
console.log(mouses)

const counter = document.querySelector(".compteur")

const resetButton = document.querySelector(".reset")

mouses.forEach((mouse, i)=>{
    mouse.addEventListener("click", ()=>{
        if(getComputedStyle(mouses[i]).backgroundColor!=="rgb(128, 128, 128)"){
            mouses[i].style.backgroundColor="rgb(128,128,128)"
        }else{
            mouses[i].style.backgroundColor="green"
        }
        counter.textContent = parseInt(counter.textContent) + 1
    })
})

resetButton.addEventListener("click", ()=>{
    counter.textContent = 0
})