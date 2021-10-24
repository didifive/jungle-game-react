const initialState = {
  life: 3
}

export function lifeReducer(state = initialState, action) {
  switch(action.type) {
    case 'HANDLE_LIFE': 
      return {
        life: state.life + action.payload.life
      }
    default: 
      return state;
  }
}