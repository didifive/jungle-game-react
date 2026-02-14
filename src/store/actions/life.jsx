export function handleLife(life){
  return {
    type: 'HANDLE_LIFE',
    payload: {
      life: life
    }
  }
}

export function resetLife(){
  return {
    type: 'RESET_LIFE'
  }
}