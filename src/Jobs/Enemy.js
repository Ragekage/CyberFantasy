

class Enemy  {


constructor(){

    var stats = { Health: 10,
        ExpGained: 50,
        CashGained: 50,
        WeaponAttack: 10,
        MeleeAttack: 10,
        Type: "",
        }

     
    this.difficulty = this.getDifficulty()    
    this.types = ["ranged", "melee", "common"]
    this.lvl = 2
  
    this.EnemyStats = this.buildNewEnemy(stats, this.types, this.lvl, this.difficulty)
}

get Stats(){
    return this.enemyStats
}

get hi(){
   return "hi"
}



getDifficulty(){
    var difficulty = Math.random()
    difficulty = Math.ceil(difficulty * 10)

    return difficulty
}

buildNewEnemy(Stats, types, lvl, difficulty){
   
 var enemyStats = Stats;
 var typeRandom = Math.random()
 var attackRandom = Math.random()
 typeRandom = typeRandom * types.length;
 typeRandom = Math.floor(typeRandom)
 enemyStats.MeleeAttack = enemyStats.MeleeAttack * lvl 

    if(difficulty <= 6){
    enemyStats.Health = enemyStats.Health * lvl / 2
    
    }
    else if( difficulty > 6 && difficulty <= 8)
    {
    attackRandom = attackRandom * 10
    enemyStats.Health = enemyStats.Health * lvl + 20 * lvl / 2
    enemyStats.MeleeAttack = enemyStats.MeleeAttack + Math.floor(attackRandom) + (lvl * 3)
    }
    else if( difficulty > 8 && difficulty <= 10)
    {
    attackRandom = attackRandom * 10
    enemyStats.Health = enemyStats.Health * lvl + 30 * lvl / 2
    enemyStats.MeleeAttack = enemyStats.MeleeAttack + Math.floor(attackRandom) + (lvl * 8)
    }
    enemyStats.Type = types[typeRandom]
 

 return enemyStats

}



}

export default Enemy