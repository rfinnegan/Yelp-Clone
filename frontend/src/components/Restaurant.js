import actions from '../store/actions'
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
  const reviews = state.reviews

    return (
      <div>
        <h1>{restaurant.name}</h1>
        <div>{restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.zip}</div>
        <div>Phone Number: {restaurant.phone_number}</div>
        <div>
          <h2>reviews</h2>
          <div>
  
          </div>
        </div>
      </div>
    )
}


export default Restaurant;
