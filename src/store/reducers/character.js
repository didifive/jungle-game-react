const initialState = {
  position: 7
}

export function characterReducer(state = initialState, action) {
  switch(action.type) {
    case 'CHAR_POSITION': 
      return {
        position: action.payload.position
      }
    default: 
      return state;
  }
}