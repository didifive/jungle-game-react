const initialState = {
  life: 5
}

export function lifeReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_LIFE': 
      return {
        life: state.life + action.payload.life
      }
    default: 
      return state;
  }
}