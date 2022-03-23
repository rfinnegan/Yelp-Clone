import {initializeRestaurants, getRestaurantById, createNewRestaurant} from './restaurants'
import {initializeReviews, getReviewsForRestaurant, createNewReview} from './reviews'
import {searchRestaurants} from './search'

const actions = {initializeRestaurants, getRestaurantById, createNewRestaurant, initializeReviews, getReviewsForRestaurant, createNewReview, searchRestaurants}

export default actions