import {initializeRestaurants, getRestaurantById, createNewRestaurant} from './restaurants'
import {initializeReviews, getReviewsForRestaurant, createNewReview} from './reviews'

const actions = {initializeRestaurants, getRestaurantById, createNewRestaurant, initializeReviews, getReviewsForRestaurant, createNewReview}

export default actions