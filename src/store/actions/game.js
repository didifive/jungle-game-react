export function gameStart(){
  return {
    type: 'GAME_START',
    payload: {
      game: 'start'
    }
  }
}

export function gameOver(){
  return {
    type: 'GAME_OVER',
    payload: {
      game: 'over'
    }
  }
}

export function gameStop(){
  return {
    type: 'GAME_STOP',
    payload: {
      game: 'stop'
    }
  }
}

export function gameReset(){
  return {
    type: 'GAME_STOP',
    payload: {
      game: 'loaded'
    }
  }
}