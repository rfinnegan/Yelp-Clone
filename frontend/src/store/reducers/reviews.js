const reviewsReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_REVIEWS':
      return action.data
    case 'REVIEWS_RESTAURANT':
      return action.data
    default: {
      return state
    }
  }
}

export default reviewsReducer