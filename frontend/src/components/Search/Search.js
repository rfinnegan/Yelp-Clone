import { useSelector, useDispatch } from 'react-redux';
import actions from '../../store/actions';

import './Search.css'

const { searchRestaurants } = actions

const Search = () => {
  const searchResults = useSelector(state => state.search)
  console.log('hiya', searchResults)
  const dispatch = useDispatch()
  const handleChange = async (event) => {
    const searchName = event.target.value
    const search = await searchRestaurants(searchName)
    dispatch(search)
  }

  return (

    <div className="search-container">
      <h3>What are you looking for?</h3>
      <div className="search-bar-container">
        <label htmlFor="search"></label>
        <input className="search-input" name="search" id="search" placeholder="Find restaurants..." onChange={handleChange} />
        {/* <button className="search-button" type="submit">Search</button> */}
      </div>
      <div>
        <div>
          {searchResults.map(result =>
            <div key={result.id}>
              <div className="results-container">
                <a href={`/restaurants/${result.id}`}>{result.name}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Search