export const searchRestaurants = search => {
  return {
    type: 'SEARCH_RESTAURANTS',
    data: {
      content: search
    }
  }
}