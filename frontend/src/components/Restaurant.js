import actions from '../store/actions'
import CreateReview from './CreateReview'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

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
  }, [restaurantId, dispatch])
  
  useEffect(() => {
    const getRestaurantReviews = async (restaurantId) => {
      const initReviews = await getReviewsForRestaurant(restaurantId)
      dispatch(initReviews)
    }
    getRestaurantReviews(restaurantId)
  }, [restaurantId, dispatch])

  const restaurant = state.restaurants;
  const reviews = state.reviews;

    return (
      <div>
        <h1>{restaurant.name}</h1>
        <div>{restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.zip}</div>
        <div>Phone Number: {restaurant.phone_number}</div>
        <div>
          <h2>Reviews</h2>
          <div>
            {reviews.map(review => 
              <div key={review.id}>
                <div>
                  {review.review_text}
                  <div>rating: {review.rating}</div>
                </div>
              </div>
              )}
          </div>
            <CreateReview />
        </div>
      </div>
    )
}


export default Restaurant;
