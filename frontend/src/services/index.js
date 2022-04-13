import axios from 'axios'

const baseUrl = 'http://localhost:8080'

const getRestaurants = async () => {
  const response = await axios.get(baseUrl + '/restaurants')
  return response.data
}

const getRestaurantById = async (id) => {
  const response = await axios.get(baseUrl + '/restaurants/' + id)
  return response.data
}

const createNewRestaurant = async (restaurant) => {
  const response = await axios.post(baseUrl + '/restaurants', restaurant)
  console.log(response.data)
  return response.data
}

const getReviews = async () => {
  const response = await axios.get(baseUrl + '/reviews')
  return response.data
}

const getReviewsByRestaurantId = async (id) => {
  const response = await axios.get(baseUrl + '/restaurants/' + id + '/reviews')
  return response.data
}

const createReview = async (review) => {
  const response = await axios.post(baseUrl + '/reviews', review)
  return response.data
}

const searchByName = async (searchName) => {
  const response = await axios.get(baseUrl + '/restaurants?search=' + searchName)
  return response.data
}

const service = {
  getRestaurants,
  getRestaurantById,
  createNewRestaurant,
  getReviews,
  getReviewsByRestaurantId,
  createReview,
  searchByName
}

export default service;