export function handleLife(life){
  return {
    type: 'HANDLE_LIFE',
    payload: {
      life: life
    }
  }
}