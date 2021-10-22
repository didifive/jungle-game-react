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

export function gamePause(){
  return {
    type: 'GAME_PAUSE',
    payload: {
      game: 'pause'
    }
  }
}