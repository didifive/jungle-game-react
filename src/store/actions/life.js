export function handleLife(life){
  return {
    type: 'ADD_LIFE',
    payload: {
      life: life
    }
  }
}