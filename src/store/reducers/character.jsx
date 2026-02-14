const initialState = {
  position: 7
}

export function characterReducer(state = initialState, action) {
  switch(action.type) {
    case 'CHAR_POSITION': 
      return {
        position: state.position + action.payload.position
      }
    case 'CHAR_RESET': 
      return {
        ...state,
        position: 7
      }
    default: 
      return state;
  }
}