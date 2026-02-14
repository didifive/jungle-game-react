const initialState = {
  life: 3
}

export function lifeReducer(state = initialState, action) {
  switch(action.type) {
    case 'HANDLE_LIFE': {
      // Garante que a vida nunca fica negativa
      const newLife = Math.max(0, state.life + action.payload.life);
      return {
        life: newLife
      }
    }
    case 'RESET_LIFE': 
      return {
        ...state,
        life: 3
      }
    default: 
      return state;
  }
}