import Restaurants from '../../components/Restaurants/Restaurants'
import CreateRestaurant from '../../components/createRestaurant/CreateRestaurant'
import Search from '../../components/Search/Search'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Yelp Clone</h1>
      <Search />
    </div>
  )
}

export default Home