class Soldier{
    constructor(health, strength){
        this.strengh =  strength
        this.health = health
    }
    attack(){
        return this.strengh
    }
    receiveDamage(damage){
        this.health-=damage
    }
}

class Viking extends Soldier{
    constructor(name, health, strengh){
        super(health, strengh)
        this.name = name
    }
    receiveDamage(damage){
        this.health -=damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry(){
        return "Odin Owns You All !!!!"
    }
}

class Saxon extends Soldier{
    // constructor(health, strengh){
    //     super(health,strengh)
    // }
    receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return "A Saxon has died in combat"
        }
    }
}


class War{
    constructor(){
        this.viking = new Viking("Thordendal", 150, 30)
        this.saxon = new Saxon(200, 20)
        this.turn=true
    }
    
    vikingAttack(){
        const damage = this.viking.attack()
        const sentence = this.saxon.receiveDamage(damage)
        console.log(sentence)
        this.showStatus()
    }
    saxonAttack(){
        const damage = this.saxon.attack()
        const sentence = this.viking.receiveDamage(damage)
        console.log(sentence)
        this.showStatus()
    }
    showStatus(){
        console.log(`Viking ${this.viking.health} -- Saxon ${this.saxon.health}`)
    }
    nextRound(){
        if(this.turn){
            this.vikingAttack()
        }else{
            this.saxonAttack()
        }
        this.turn = !this.turn
    }
    battleContinues(){
        if(this.viking.health>0 && this.saxon.health>0){
            return true
        }
        return false
    }
}

const war = new War()

while(war.battleContinues()){
    war.nextRound()
}
