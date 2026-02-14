const initialState = {
  bgm: true,
  soundEffects: true
}

export function soundsReducer(state = initialState, action) {
  switch(action.type) {
    case 'PLAY_BGM': 
      return {
        ...state,
        bgm: true
      }
    case 'PLAY_SOUNDEFFECTS': 
      return {
        ...state,
        soundEffects: true
      }
    case 'STOP_BGM': 
      return {
        ...state,
        bgm: false
      }
    case 'STOP_SOUNDEFFECTS': 
      return {
        ...state,
        soundEffects: false
      }
    default: 
      return state;
  }
}