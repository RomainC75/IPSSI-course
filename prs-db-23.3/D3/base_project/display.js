class Display{
    constructor(){
        this.game = new Game()
        this.count=0
        this.init()
    }
    init(){
        this.counterH2=document.querySelector('h2')
        this.updateDisplay()
        this.minusBtn = document.getElementById('minus')
        this.plusBtn = document.getElementById('plus')
        this.minusBtn.addEventListener('click',()=>{
            this.count--
            this.updateDisplay()
        })
        this.plusBtn.addEventListener('click',this.increase.bind(this))
    }
    increase(){
        this.count++
        this.updateDisplay()
    }

    updateDisplay(){
        this.counterH2.innerText=this.count
    }
}
