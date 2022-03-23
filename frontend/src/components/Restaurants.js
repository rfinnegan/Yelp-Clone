import { useSelector, useDispatch } from 'react-redux'
import actions from '../store/actions'
import { useEffect } from 'react'
import CreateRestaurant from './CreateRestaurant'
import Search from './Search'

const { initializeRestaurants } = actions

const Restaurants = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const initialize = async () => {
      const initialRestaurants = await initializeRestaurants()
      dispatch(initialRestaurants)
    }
    initialize()
  }, [dispatch])

  const state = useSelector(state => state)
  const restaurants = state.restaurants;

    return (
      <div>
        <h1>restaurants</h1>
        <Search />
        {restaurants.map(restaurant => 
          <div key={restaurant.id}>
            <div>
              <a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a>
            </div>
            </div>
        )}
        <div>
          <CreateRestaurant />
        </div>
      </div>
    )
}


export default Restaurants;
