# LAB | Viking vs Saxon

![giphy](https://resize-europe1.lanmedia.fr/f/webp/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/culture/assassins-creed-valhalla-une-epopee-viking-a-couper-le-souffle-4004606/56275785-1-fre-FR/Assassin-s-Creed-Valhalla-une-epopee-viking-a-couper-le-souffle.png)

## Introduction

Nous avons passé en revue la `programmation orientée objet`, les `class` et l'`héritage` en JS. Maintenant, nous allons travailler avec nos amis vikings et voir comment appliquer ces nouveaux concepts

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
- doit enlever les dommages reçus de la propriété `health` 
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

#### Héritage

- `Saxon` doit "extend `Soldier`

#### class

- Vous n'avez pas besoin d'un constructor puisque cette class hérite de la classe parent (health et strength) - extension de la class "Soldier" :wink:

#### méthode `attack()` 

Cette méthode doit **hériter** de `Soldier`, pas besoin de la réimplémenter.

- doit être une fonction
- doit recevoir **0 arguments**
- doit retourner **la propriété `strength` de `Saxon`**

#### méthode `receiveDamage()` 

Cette méthode a besoin d'être **re-implémentée** pour `Saxon` car la version de`Saxon` a besoin d'une valeur retour différente.

- doit être une fonction
- doit recevoir **1 argument** ( damage)
- doit supprimer les dommages reçus de la propriété `health` 
- **si le Saxon est encore en vie**, il doit retourner **_"A Saxon has received DAMAGE points of damage"_**
- **si le Saxon est mort**, il doit retourner **_"A Saxon has died in combat"_**

<br>



### BONUS - Iteration 4: War

C'est là qu'on va pouvoir s'amuser :wink: 
WAR! 
Notre class `War` nous autorisera à avoir un `Viking` et un `Saxon` qui se battront l'un contre l'autre.

Modifier la class `War` et lui ajouter 5 méthodes:


- `vikingAttack()`
- `saxonAttack()`
- `showStatus()`
- `nextRound()`

#### class

A la création de `War`, ajoutez un Viking et un Saxon

- doit recevoir **0 arguments**
- doit avoir une variable qui précise qui doit attaquer


#### `vikingAttack()` method

Le `Saxon`  appelle sa méthode `receiveDamage()` et recevra des dommages égales à la  `strength` du `Viking`. Une seule attaque sera déclenchée et `Saxon` ne contre attaque pas directement.

- doit être une fonction
- doit recevoir **0 arguments**
- `Saxon` doit `receiveDamage()` égale à la `strength` du `Viking`


#### `saxonAttack()` method

La version `Saxon` de `vikingAttack()`. Le `Viking` reçoit des dommages égales à la  `strength` du `Saxon`.

- doit être une fonction
- doit reccevoir **0 arguments**
- `Viking` doit `receiveDamage()` égale à la `strength` du `Saxon`

#### `nextRound()` method
Permet de faire attaquer le prochain joueur

<br>

### BONUS - Iteration 5: Go !
Faire jouer tous les tours avec `nextRound()`
Implémentez une méthode `battleContinues()`
Penser à une façon  d'implémenter de l'aléatoire lors des attaques 


**Happy Coding!** 💙