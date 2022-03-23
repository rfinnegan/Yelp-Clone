import { useSelector, useDispatch } from 'react-redux';
import actions from '../store/actions';

const { searchRestaurants } = actions

const Search = () => {
  const restaurants = useSelector(state => state.restaurants)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const searchText = event.target.value
    const searchTextLength = searchText.searchTextLength
    const filterRestaurants = restaurants.filter(restaurant => {
      return restaurant.name.substring(0, searchTextLength).toLowerCase().includes(searchText.toLowerCase())
    })
    console.log(filterRestaurants)
    dispatch(searchRestaurants(filterRestaurants))
  }

  return (
    <div>
      Search for Restaurants
      
        <input onChange={handleChange} />
        <button type="submit">Search</button>

    </div>
  )
}

export default Search