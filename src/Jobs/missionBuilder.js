import Enemy from './Enemy';
import {createMission, createEnemy, deleteEnemy, updateMission} from '../Utilities/ServerEndpoints'


export async function missionBuilder(playerId){

    // var random = Math.random();
    var randomMissionName = Math.random();
    
    var missionNames = ["Find Gang Info", "Kill Leader",  "Back Up", "Drive by", "Fuck them up"];
    randomMissionName = Math.floor(randomMissionName * missionNames.length)
    var MissionName = missionNames[randomMissionName]

    var postData = {
        Name: MissionName,
        PlayerId: playerId
    }

    var response = await createMission(postData)
    return response
}

export async function buildMissionStats (enemies, mission, newOrPrev){
    var MissionStats = {
        Id: mission.Id,
        DIFFICULTY: 0,
        TYPES: [],
        CASHGAIN: 0,
        EXPGAIN: 0,
        Favours: "",
        Name: mission.Name,
        ExpiresAt: mission.ExpiresAt
    }

   
    // if(newOrPrev === false){
    //     enemies.map((enemy, id) => {
    //         MissionStats.DIFFICULTY = MissionStats.DIFFICULTY + enemy.Difficulty;
    //         MissionStats.TYPES.push(enemy.Type);
    //         MissionStats.CASHGAIN = MissionStats.CASHGAIN + enemy.CashGained;
    //         MissionStats.EXPGAIN = MissionStats.EXPGAIN + enemy.ExpGained
    //     })
    // }
    // else
    // {
    enemies.map((enemy, id) => {
        MissionStats.DIFFICULTY = MissionStats.DIFFICULTY + enemy.EnemyStats.Difficulty;
        MissionStats.TYPES.push(enemy.EnemyStats.Type);
        MissionStats.CASHGAIN = MissionStats.CASHGAIN + enemy.EnemyStats.CashGained;
        MissionStats.EXPGAIN = MissionStats.EXPGAIN + enemy.EnemyStats.ExpGained
    })
    // }
 
    var RangeAmount = MissionStats.TYPES.filter(type => type === "ranged")
    var MeleeAmount = MissionStats.TYPES.filter(type => type === "melee")
    var CommonAmount = MissionStats.TYPES.filter(type => type === "common")

    if(RangeAmount.length > MeleeAmount.length && RangeAmount.length > CommonAmount.length)
    {
        MissionStats.Favours = "Ranged"
    }
    else if (MeleeAmount.length > RangeAmount.length && MeleeAmount.length > CommonAmount.length)
    {
        MissionStats.Favours = "Melee"
    }
    else if (CommonAmount.length > RangeAmount.length && CommonAmount.length > MeleeAmount.length)
    {
        MissionStats.Favours = "Common"
    }
    else
    {
        MissionStats.Favours = "Mixed"
    }
    return MissionStats
}

export async function updateNewMission(missionId, playerId){

    var enemyResponse = await deleteEnemy(missionId).then(response => {
        return enemyResponse
    })

    var randomMissionName = Math.random();
    
    var missionNames = ["Find Gang Info", "Kill Leader",  "Back Up", "Drive by", "Fuck them up"];
    randomMissionName = Math.floor(randomMissionName * missionNames.length)
    var MissionName = missionNames[randomMissionName]

    var postData = {
        Name: MissionName,
        MissionId: missionId
    }

    var mission = {
        MissionStats: {},
        Enemies: []
    }

   

    var tempMission = await updateMission(postData).then(response => {
        return response
    })

    mission.Enemies = await BuildEnemies(missionId).then(response => {
        return response
    })

    mission.MissionStats = await buildMissionStats(mission.Enemies, tempMission).then(response => {
        return response
    })
    
    return mission
}

export async function BuildEnemies(missionId){
    var random = Math.random();
    var enemies = []
    random = Math.floor(random * 4) + 1;
      var check = [1,2,3,4,5]
    check.map(async(check, id)  => {
        if(id > random)
        {

        }
        else
        {
        var newEnemy = new Enemy();
        var postData = {
            MissionId: missionId,
            Enemy: newEnemy.EnemyStats
        }
        enemies.push(newEnemy)
        var response = await createEnemy(postData).then(response => {
            return response
        })
        }
    })
    // var enemy = await createEnemy(postData).then(response => {
    //     console.log(response)
    //     return response
    // }) 
    
    return enemies
}