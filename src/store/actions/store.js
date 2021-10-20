export function addScore(score){
  return {
    type: 'ADD_SCORE',
    payload: {
      score: score
    }
  }
}