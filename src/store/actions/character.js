export function charPosition(position){
  return {
    type: 'CHAR_POSITION',
    payload: {
      position: position
    }
  }
}

export function charReset(){
  return {
    type: 'CHAR_RESET'
  }
}