import service from "../../services"
import models from '../../models'

const { Restaurant } = models

export const initializeRestaurants = async () => {
  const restaurants = await service.getRestaurants()
  return {
    type: 'INIT_RESTAURANTS',
    data: restaurants
  }
}

export const getRestaurantById = async (id) => {
  const restaurant = await service.getRestaurantById(id)
  return {
    type: 'ID_RESTAURANT',
    data: restaurant
  }
}

export const createNewRestaurant = async (restaurant) => {
  const newRestaurant = await service.createNewRestaurant(restaurant)
  return {
    type: 'ADD_RESTAURANT',
    data: newRestaurant
  }
}