const initialState = {
  enemies: [],
  defeated: []
}

export function enemyReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ENEMY': 
      return {
          ...state,
          enemies: action.payload
      }
    case 'DEFEAT_ENEMY': 
      const index = state.enemies.indexOf(action.payload);
      return {
          ...state,
          enemies: state.enemies.filter((i) => i.id !== action.payload.id),
          defeated: action.payload
      }
    default: 
        return state;
  }
}