const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_RESTAURANTS':
      return action.data.content
    default:
      return state
  }
}

export default searchReducer