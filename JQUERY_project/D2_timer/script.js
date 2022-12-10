
const display = document.querySelector("h1")
const start_button = document.querySelector("h2")

let id=0

start_button.addEventListener("click",()=>{
    if(start_button.innerText == "start"){
        start_timing()
        start_button.innerText = "reset"
    }else{
        start_button.innerText = "start"
        clearInterval(id)
        display.innerText = "0"
    }  
})

const start_timing = () =>{
    id = setInterval(()=>{
        const current_value = parseInt(display.innerText)
        if(current_value<10){
            display.innerText = current_value + 1
        }else{
            clearInterval(id)

        }
    },1000)
    
}