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

const createNewRestaurant = async () => {
  const object = {}
  const response = await axios.post(baseUrl, object)
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

const service = {getRestaurants, getRestaurantById, createNewRestaurant, getReviews, getReviewsByRestaurantId}

export default service;