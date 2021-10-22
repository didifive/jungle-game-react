export function charPosition(position){
  return {
    type: 'CHAR_POSITION',
    payload: {
      position: position
    }
  }
}