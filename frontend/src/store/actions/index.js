import {initializeRestaurants, getRestaurantById, createNewRestaurant} from './restaurants'
import {initializeReviews, getReviewsForRestaurant} from './reviews'

const actions = {initializeRestaurants, getRestaurantById, createNewRestaurant, initializeReviews, getReviewsForRestaurant}

export default actions