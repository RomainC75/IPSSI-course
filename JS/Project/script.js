class Display{
    constructor(simon){
        this.buttons = Array.from(document.getElementsByClassName("square"))
        this.quit = document.getElementById("exit")
        this.playButton = document.getElementById("play")
        this.simon = simon

    }
    attachEvents(){
        console.log(this.buttons)
        this.buttons.forEach( (el, i)=>{
            console.log("====")
            el.addEventListener('click',e=>{
                this.simon.addNewValueToTheUserSequence(i)
            })
        })
        this.quit.addEventListener("click",()=>{
            stopGame()
        })
        this.playButton.addEventListener("click",()=>{
            this.playSequence()
        })
    }
    stopGame(){
        console.log("stoping..")
    }

    

    playSequence(){
        console.log("play sequence", this.simon.sequence)
        this.simon.sequence.forEach(code=>{
            
            this.setDelay(code)
        })
    }
    setDelay(code){
        setTimeout(()=>{
            console.log("===>",code)
            this.buttons[code].classList.add("shine")
        }, 1000)
    }
}



class Game{
    constructor(){
        this.length=3
        this.sequence=[]
        this.userSequence=[]
    }

    createNewSequence = (ln) =>{
        const array = []
        for(let i=0 ; i<ln ; i++){
            array.push(Math.floor(Math.random()*4))
        }
        this.sequence = array
    }

    addNewValueToTheUserSequence(i){
        this.userSequence.push(i)
        console.log(this.userSequence)
    }
}


const simon = new Game()
simon.createNewSequence(4)

const display = new Display(simon)
display.attachEvents()

