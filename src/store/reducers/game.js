const initialState = {
  game: 'start'
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
    case 'GAME_PAUSE': 
      return {
        game: action.payload.game
      }
    default: 
      return state;
  }
}