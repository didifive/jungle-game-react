export function addEnemy(enemyId, enemyType){
  return {
    type: 'ADD_ENEMY',
    payload: {
      id: enemyId,
      type: enemyType
    }
  }
}

export function defeatEnemy(enemyId){
  return {
    type: 'DEFEAT_ENEMY',
    payload: {
      id: enemyId,
    }
  }
}

export function resetEnemies(){
  return {
    type: 'RESET_ENEMIES'
  }
}