import { useSelector, useDispatch } from 'react-redux'
import actions from '../../store/actions'
import { useEffect } from 'react'
import './Restaurants.css'

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
      <div className="restaurants-container">
        <h2>Restaurants</h2>
          <div className="restaurants-content">
            {restaurants.map(restaurant => 
              <div key={restaurant.id}>
                <div>
                  <a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a>
                </div>
              </div>
            )}
          </div>
        <div>
      </div>
      </div>
    )
}


export default Restaurants;
