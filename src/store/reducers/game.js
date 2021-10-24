const initialState = {
  game: 'loaded'
}

export function gameReducer(state = initialState, action) {
  switch(action.type) {
    case 'GAME_START': 
      return {
        game: action.payload.game
      }
    case 'GAME_OVER': 
      return {
        game: action.payload.game
      }
    case 'GAME_STOP': 
      return {
        game: action.payload.game
      }
    default: 
      return state;
  }
}