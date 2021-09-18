const INITIAL_STATE = {
  dado: 0
}

const dadoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DADO_INCREMENT':
        return {...state, dado: action.payload + 1}
    default:
      return state 
  }
}

export default dadoReducer