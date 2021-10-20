const initialState = {
  score: 0
}

export function scoreReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_SCORE': 
      return {
        score: state.score + action.payload.score
      }
    default: 
        return state;
  }
}