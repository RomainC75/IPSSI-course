// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health-=damage
    }
    isAlive(){
        return this.health>0 ? true : false
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name=name
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }
        return "A Saxon has died in combat"
    }
}

// War
class War {
    constructor(){
        this.viking = new Viking("Ragnar", 220, 30)
        this.saxon = new Saxon(300, 20)
        this.turn = false
    }
    vikingAttack(){
        return this.saxon.receiveDamage(this.viking.attack())
    }
    saxonAttack(){
        return this.viking.receiveDamage(this.saxon.attack())
    }
    nextRound(){
        this.turn = !this.turn
        if(this.turn==false){
            return this.vikingAttack()
        }else{
            return this.saxonAttack()
        }
    }
    isEveryoneAlive(){
        if(this.viking.isAlive() && this.saxon.isAlive()){
            return true
        }
        return false
    }
}

const war = new War()
while(war.isEveryoneAlive()){
    console.log(war.nextRound())
}