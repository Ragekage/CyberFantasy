import React, { Component } from 'react';
import Mission from './Mission';
import Battle from './Battle'
import {Card, CardBody, Row, Col} from 'reactstrap';
import Enemy from './Enemy'
import {missionBuilder, BuildEnemies, buildMissionStats, updateNewMission} from './missionBuilder'
import {checkMissionForPlayer, getEnemyByMissionId } from '../Utilities/ServerEndpoints'


class MissionBoard extends Component {

constructor(props){
    super(props)
    this.state = {
        MissionList: [],
        mounted: false,
        MissionsReady: false,
    }
    
}

async componentDidMount(){
    var playerId = this.props.Player.current.props.PlayerStats.Id
   checkMissionForPlayer(playerId).then(response => {
        if(response.missions.length > 0)
        {
            this.buildPreviousMissionBoards(response.missions).then(res => {
            this.setState({mounted: true, MissionList: res, MissionsReady: true})
            })
        }
        else
        {
            this.buildNewMissionBoards(playerId).then(res => {
                
            })
            

        }
    }).catch(error => {
    })
}

componentWillUnmount(){
    this.setState({mounted: false})
}

reBuildMission = async(missionId) => {
    
}

buildPreviousMissionBoards = async(missions) => {
    var missionsList = []

   return Promise.all(missions.map(async(mission, id) => {
    
    var missionList = {
        MissionStats: {},
        Enemies: [],
    };

    missionList.Enemies = await getEnemyByMissionId(mission.Id).then(response => {
        var enemyList = []
        
        response.data.response.map((enemy, id) => {
            var newEnemy = new Enemy(enemy);
            enemyList.push(newEnemy)
        })
        return enemyList
    })
    missionList.MissionStats = await buildMissionStats( missionList.Enemies , mission, false).then(res => {
            return res
    })

    
    return missionList
    }))
    
   


    
}

buildNewMissionBoards = async(playerId) => {
    var missionList = [playerId,playerId,playerId];
    var missions = [];
    var enemies = []

   

    missions.push(await this.buildNewMission(playerId).then(response => {
            return response
     }))
     missions.push(await this.buildNewMission(playerId).then(response => {
        return response
    }))
    missions.push(await this.buildNewMission(playerId).then(response => {
        return response
    }))
    
    // this.buildNewMission(playerId).then(response => {
    //     missions.push(response)
    //     this.buildNewMission(playerId).then(response => {
    //         missions.push(response)
    //         this.buildNewMission(playerId).then(response => {
    //             missions.push(response)
    //         console.log(missions)
                
    //         })
    //     })
    // })

    this.setState({MissionList: missions, MissionsReady: true})
    return missions
}

updateMission = async(missionId, playerId, missionArrayId) => {
    var missions = this.state.MissionList
    await updateNewMission(missionId, playerId).then(response => {
        missions[missionArrayId] = response
        this.setState({MissionList: missions})

        return response
    })
    return missions
}   



buildNewMission =  async(playerId) => {
var mission = {
    MissionStats: {},
    Enemies: []
}

var missionId = null;

var currentMission = await missionBuilder(playerId).then(response => {
    mission.MissionStats = response.data.responses
    missionId = response.data.responses.Id
  
    return response
});

var currentEnemies = await  BuildEnemies(missionId).then(response => {
    mission.Enemies = response
    return response
})


mission.MissionStats = await buildMissionStats(mission.Enemies, mission.MissionStats, true).then(response => {
    return response
});


return mission
}

renderMissionList = () => {
   
    return(
        <div className="MissionBoard">
        {this.state.MissionList.map((mission, id) => {   
            return(
                <Col>
                <div>
                   <Mission ref={"mission" + id} ArrayId={id} Rebuild={this.updateMission} Mission={mission} Player={this.props.Player}/>
                </div>
                </Col>
            )})}
        </div>
    )
     
    
}


    render()
    {
        if(this.state.MissionList.length > 0)
        {
            return(
        <div >
            {this.state.MissionsReady === true && (this.renderMissionList())}
        </div>
        )
        }
        else
        {
            return(
                <div>Loading</div>
            )
            }
       
    }
}

export default MissionBoard