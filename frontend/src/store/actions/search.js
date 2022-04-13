import service from '../../services/index'

export const searchRestaurants = async (searchName) => {
  const search = await service.searchByName(searchName)
  console.log('service returned', search)
  return {
    type: 'SEARCH_RESTAURANTS',
    data: {
      content: search
    }
  }
}