const restaurantReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_RESTAURANTS':
      return action.data
    case 'ID_RESTAURANT':
      return action.data
    case 'ADD_RESTAURANT':
      return state.concat(action.data)
    default: {
      return state
    }
  }
}

export default restaurantReducer