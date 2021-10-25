export function addScore(score){
  return {
    type: 'ADD_SCORE',
    payload: {
      score: score
    }
  }
}

export function resetScore(){
  return {
    type: 'RESET_SCORE',
  }
}

export function addRecord(record){
  return {
    type: 'ADD_RECORD',
    payload: {
      record: record
    }
  }
}