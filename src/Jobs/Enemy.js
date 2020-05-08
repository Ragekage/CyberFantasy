

class Enemy  {


constructor(preStats){
  
    this.difficulty = this.getDifficulty()    

    var stats = {
        Name: this.createEnemyName(),
        Health: 0,
        ExpGained: 0,
        CashGained: 0,
        WeaponAttack: 0,
        MeleeAttack: 0,
        Type: "",
        Difficulty: this.difficulty
        } 

    this.isDead = false;
     
    this.types = ["ranged", "melee", "common"]
    this.lvl = 2

    this.EnemyStats = preStats === undefined ? this.buildNewEnemy(stats, this.types, this.lvl, this.difficulty) : preStats
    }

  


get Stats(){
    return this.enemyStats
}

get hi(){
   return "hi"
}

createEnemyName(){
    var Names = ["frank", "john", "billy", "trevor", "harry", "percy", "morpheus", "neo", "zues", "kunkka", "peter", "joe"];
    var randomEnemyName = Math.random();
    randomEnemyName = Math.floor(randomEnemyName * Names.length);

    return Names[randomEnemyName]
}

 doDamage(damage){
   var stats = this.EnemyStats
   stats.Health = stats.Health - damage
   if(stats.Health <= 0)
   {
        this.isDead = true;
        this.EnemyStats = stats
   }
   else
   {
        this.EnemyStats = stats
   }
}

getDifficulty(){
    var difficulty = Math.random()
    difficulty = Math.ceil(difficulty * 10)

    return difficulty
}

buildNewEnemy(Stats, types, lvl, difficulty){
   
 var enemyStats = Stats;
 var typeRandom = Math.random()
 var statsMultipler = 10 + (lvl * 3);

 typeRandom = typeRandom * types.length;
 typeRandom = Math.floor(typeRandom)
 enemyStats.Type = types[typeRandom]

 if(enemyStats.Type === "ranged")
 {
   enemyStats =  this.buildTypeRange(difficulty, enemyStats, statsMultipler, lvl)
 }
 else if(enemyStats.Type === "melee")
 {
    enemyStats = this.buildTypeMelee(difficulty, enemyStats, statsMultipler, lvl)
 }
 else if(enemyStats.Type === "common")
 {
    enemyStats = this.buildTypeCommon(difficulty, enemyStats, statsMultipler, lvl)
 }

return enemyStats

}

 
buildTypeRange = (difficulty, enemyStats, statsMultipler, lvl ) => {
    var attackRandom = Math.random()
    attackRandom = Math.ceil(attackRandom * 5)


    if(difficulty <= 6){
        enemyStats.Health = 20 + (statsMultipler / 4) * 10
        enemyStats.WeaponAttack = statsMultipler * 2 + attackRandom
        enemyStats.MeleeAttack = + (statsMultipler / 4) * 3
        enemyStats.CashGained = 100 * lvl
        enemyStats.ExpGained = 50 * lvl
        }
        else if( difficulty > 6 && difficulty <= 8)
        {
        enemyStats.Health = 20 + (statsMultipler / 2) * 10
        enemyStats.WeaponAttack = statsMultipler * 3 + attackRandom
        enemyStats.MeleeAttack = + (statsMultipler / 2) * 3
        enemyStats.CashGained = 300 * lvl
        enemyStats.ExpGained = 200 * lvl

        }
        else if( difficulty > 8 && difficulty <= 10)
        {
        enemyStats.Health = 20 + (statsMultipler) * 10
        enemyStats.WeaponAttack = statsMultipler * 4 + attackRandom
        enemyStats.MeleeAttack = + (statsMultipler) * 3
        enemyStats.CashGained = 600 * lvl
        enemyStats.ExpGained = 500 * lvl
        }
        return enemyStats

}

buildTypeMelee = (difficulty, enemyStats, statsMultipler, lvl ) => {

    var attackRandom = Math.random()
    attackRandom = Math.ceil(attackRandom * 5)


    if(difficulty <= 6){
        enemyStats.Health = 20 + (statsMultipler / 4) * 10
        enemyStats.WeaponAttack = + (statsMultipler / 4) * 3
        enemyStats.MeleeAttack = statsMultipler * 2 + attackRandom
        enemyStats.CashGained = 100 * lvl
        enemyStats.ExpGained = 50 * lvl
        
        }
        else if( difficulty > 6 && difficulty <= 8)
        {
        enemyStats.Health = 20 + (statsMultipler / 2) * 10
        enemyStats.WeaponAttack = + (statsMultipler / 2) * 3
        enemyStats.MeleeAttack = statsMultipler * 3 + attackRandom
        enemyStats.CashGained = 300 * lvl
        enemyStats.ExpGained = 200 * lvl
        }
        else if( difficulty > 8 && difficulty <= 10)
        {
        enemyStats.Health = 20 + (statsMultipler) * 10
        enemyStats.WeaponAttack = + (statsMultipler) * 3
        enemyStats.MeleeAttack = statsMultipler * 4 + attackRandom
        enemyStats.CashGained = 600 * lvl
        enemyStats.ExpGained = 500 * lvl
        }

        return enemyStats

}

buildTypeCommon = ( difficulty, enemyStats, statsMultipler, lvl) => {

    var attackRandom = Math.random()
    attackRandom = Math.ceil(attackRandom * 5)


    if(difficulty <= 6){
        enemyStats.Health = 20 + (statsMultipler / 2) * 10
        enemyStats.WeaponAttack = + (statsMultipler / 4) * 3 + attackRandom
        enemyStats.MeleeAttack = + (statsMultipler / 4) * 3 + attackRandom
        enemyStats.CashGained = 100 * lvl
        enemyStats.ExpGained = 50 * lvl
        
        
        }
        else if( difficulty > 6 && difficulty <= 8)
        {
        enemyStats.Health = 20 + (statsMultipler) * 10
        enemyStats.WeaponAttack = + (statsMultipler / 2) * 3
        enemyStats.MeleeAttack = + (statsMultipler / 2) * 3
        enemyStats.CashGained = 300 * lvl
        enemyStats.ExpGained = 200 * lvl

    
        }
        else if( difficulty > 8 && difficulty <= 10)
        {
        enemyStats.Health = 20 + (statsMultipler * 2) * 10
        enemyStats.WeaponAttack = + (statsMultipler) * 3
        enemyStats.MeleeAttack = + (statsMultipler) * 3
        enemyStats.CashGained = 600 * lvl
        enemyStats.ExpGained = 500 * lvl

        }
        return enemyStats

}
 



}





export default Enemy