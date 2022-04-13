import actions from '../../store/actions'
import CreateReview from '../CreateReview/CreateReview'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import './Restaurant.css'

const {getRestaurantById, getReviewsForRestaurant} = actions

const Restaurant = () => {
  const state = useSelector(state => state)
  const params = useParams() // extracting id variable, defined by route
  const restaurantId = params.id

  const dispatch = useDispatch()
  useEffect(() => {
    const initializeById = async (restaurantId) => {
      const initById = await getRestaurantById(restaurantId)
      dispatch(initById)
    }
    initializeById(restaurantId)

    const getRestaurantReviews = async (restaurantId) => {
      const initReviews = await getReviewsForRestaurant(restaurantId)
      dispatch(initReviews)
    }
    getRestaurantReviews(restaurantId)
  }, [restaurantId, dispatch])

  const restaurant = state.restaurants;
  const reviews = state.reviews;

    return (
      <div className="restaurant-container">
        <h1>{restaurant.name}</h1>
        <div>{restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.zip}</div>
        <div>Phone Number: {restaurant.phone_number}</div>
        <div>
          <div className="create-review-container">
          <CreateReview />
          </div>
          <h2>Reviews</h2>
          <div>
            {reviews.map(review => 
              <div key={review.review_id}>
                <div className="review-container">
                  <strong>rating: {review.rating}</strong>
                  <p>{review.review_text}</p>
                </div>
              </div>
              )}
          </div>
        </div>
      </div>
    )
}


export default Restaurant;
