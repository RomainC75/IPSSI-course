# LAB | Viking vs Saxon

![giphy](https://resize-europe1.lanmedia.fr/f/webp/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/culture/assassins-creed-valhalla-une-epopee-viking-a-couper-le-souffle-4004606/56275785-1-fre-FR/Assassin-s-Creed-Valhalla-une-epopee-viking-a-couper-le-souffle.png)

## Introduction

Nous avons passé en revue la `programmation orientée objet`, les `class` et l'`héritage` en JS. Maintenant, allons travailler avec nos amis vikings et voir comment appliquer ces nouveaux concepts

<br>


## Instructions

Votre tâche sera d'écrire les class suivantes, puis de les utiliser

```javascript
// Soldier
class Soldier {}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
```

<br>


### Iteration 1: Soldier

Modifiez la class `Soldier` et ajoutez 2 méthodes: `attack()`, et `receiveDamage()`.


#### class

- doit recevoir **2 arguments** (health & strength)
- doit recevoir la propriété **`health` ** en **1er argument**
- doit recevoir la propriété **`strength` ** en **2eme argument**

#### méthode `attack()` 

- doit être une fonction
- doit recevoir **0 arguments**
- doit retourner **la propriété `strength` du `Soldier`**

#### méthode `receiveDamage()` 

- doit être une fonction
- doit recevoir **1 argument** (damage)
- doit supprimer les domages reçus de la propriété `health` 
- **ne doit rien retourner** 

<br>

### Iteration 2: Viking

 `Viking` est un `Soldier` avec une propriété additionnelle, son `name`. Ils ont aussi une méthode `receiveDamage()` différente et une nouvelle méthode, `battleCry()`.

Modifiez donc la class `Viking` , pour qu'elle hérite de `Soldier`, ré-implémentez la méthode `receiveDamage()` de `Viking`, et ajoutez une nouvelle méthode `battleCry()` .

#### inheritance

- `Viking` should **extend** `Soldier`

#### class

- doit recevoir **3 arguments** (name, health & strength)
- doit recevoir la propriété **`name` ** et son **1er argument**
- doit recevoir la propriété **`health` ** et son **2nd argument**
- doit recevoir la propriété **`strength` ** et son **3ème argument**

#### méthode `attack()` 

(cette méthode doit  **hériter** de `Soldier`, pas besoin de la réimplémenter.)

- doit être une fonction
- doit recevoir **0 arguments**
- doit retourner **la propriété`strength` de `Viking`**

#### méthode `receiveDamage()` 

Cette méthode a besoin d'être **re-implementée** pour `Viking` car `Viking` a besoin de retourner des valeurs différentes.

- doit être une fonction
- doit recevoir **1 argument** (damage)
- doit les dommages reçus de la propriété `health` 
- **si `Viking` est en vie**, it should return **"NAME has received DAMAGE points of damage"**
- **si `Viking` est mort**, it should return **"NAME has died in act of combat"**

#### méthode `battleCry()` 



- doit être une fonction
- doit recevoir **0 arguments**
- doit retourner **"Odin Owns You All!"**

<br>

### Iteration 3: Saxon

Le `Saxon` est un plus faible `Soldier`. Contrairement au `Viking`, le `Saxon` n'a pas de nom. Leur méthode `receiveDamage()` sera aussi différente de celle de `Soldier` .

Modifiez le constructeur de `Saxon` pour qu'il hérite de `Soldier` et réimplémentez  la méthode `receiveDamage()` de `Saxon`.

#### inheritance

- `Saxon` doit "extend `Soldier`

#### class

- You don't have to include constructor method since this class will inherit perfectly from the parents class, both, the health and the strength (it `extends` Soldier class :wink: )

#### `attack()` method

This method should be **inherited** from `Soldier`, no need to re-implement it.

- should be a function
- should receive **0 arguments**
- should return **the `strength` property of the `Saxon`**

#### `receiveDamage()` method

This method needs to be **re-implemented** for `Saxon` because the `Saxon` version needs to have different return values.

- should be a function
- should receive **1 argument** (the damage)
- should remove the received damage from the `health` property
- **si le Saxon is still alive**, il doit retourner **_"A Saxon has received DAMAGE points of damage"_**
- **si le Saxon dies**, il doit retourner **_"A Saxon has died in combat"_**

<br>



### BONUS - Iteration 4: War

Now we get to the good stuff: WAR! Our `War` class will allow us to have a `Viking` army and a `Saxon` army that battle each other.

Modify the `War` class and add 5 methods to its `class`:

- `addViking()`
- `addSaxon()`
- `vikingAttack()`
- `saxonAttack()`
- `showStatus()`

#### class

When we first create a `War`, the armies should be empty. We will add soldiers to the armies later.

- should receive **0 arguments**
- should assign an empty array to the **`vikingArmy` property**
- should assign an empty array to the **`saxonArmy` property**

#### `addViking()` method

Adds 1 `Viking` to the `vikingArmy`. If you want a 10 `Viking` army, you need to call this 10 times.

- should be a function
- should receive **1 argument** (a `Viking` object)
- should add the received `Viking` to the army
- **shouldn't return** anything

#### `addSaxon()` method

The `Saxon` version of `addViking()`.

- should be a function
- should receive **1 argument** (a `Saxon` object)
- should add the received `Saxon` to the army
- **shouldn't return** anything

#### `vikingAttack()` method

A `Saxon` (chosen at random) has their `receiveDamage()` method called with the damage equal to the `strength` of a `Viking` (also chosen at random). This should only perform a single attack and the `Saxon` doesn't get to attack back.

- should be a function
- should receive **0 arguments**
- should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
- should remove dead saxons from the army
- should return **result of calling `receiveDamage()` of a `Saxon`** with the `strength` of a `Viking`

#### `saxonAttack()` method

The `Saxon` version of `vikingAttack()`. A `Viking` receives the damage equal to the `strength` of a `Saxon`.

- should be a function
- should receive **0 arguments**
- should make a `Viking` `receiveDamage()` equal to the `strength` of a `Saxon`
- should remove dead vikings from the army
- should return **result of calling `receiveDamage()` of a `Viking`** with the `strength` of a `Saxon`

<br>



### BONUS - Iteration 5

Since there is a lot of repetitive code in the previous two iterations, methods _vikingAttack()_ and _saxonAttack()_, try to create one _generic_ method and call it in the case of _vikingAttack_ and in the case of _saxonAttack_ instead of using almost the same code for both methods. (This iteration doesn't have test, so ask your TAs and your instructor to give you feedback on the quality of your code after the refactor.)

#### `showStatus()` method

Returns the current status of the `War` based on the size of the armies.

- should be a function

- should receive **0 arguments**

- **if the `Saxon` array is empty**, should return **_"Vikings have won the war of the century!"_**

- **if the `Viking` array is empty**, should return **_"Saxons have fought for their lives and survived another day..."_**

- **if there are at least 1 `Viking` and 1 `Saxon`**, should return **_"Vikings and Saxons are still in the thick of battle."_**

  

**Happy Coding!** 💙