export function addScore(score){
  return {
    type: 'ADD_SCORE',
    payload: {
      score: score
    }
  }
}

export function resetScore(record){
  return {
    type: 'RESET_SCORE',
    payload: {
      record: record
    }
  }
}