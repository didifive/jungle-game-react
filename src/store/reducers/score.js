const initialState = {
  score: 0,
  record: 0
}

export function scoreReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_SCORE': 
      return {
        score: state.score + action.payload.score
      }
    case 'RESET_SCORE': 
      return {
        ...state,
        score: 0,
        record: action.payload.record
      }
    default: 
      return state;
  }
}