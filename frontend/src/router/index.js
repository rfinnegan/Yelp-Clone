import Reviews from '../components/Reviews'
import Restaurant from '../components/Restaurant/Restaurant'
import RestaurantsScreen from '../screens/Restaurants/RestaurantsScreen'
import Home from '../screens/home/Home'

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Navigate replace to="/home"></Navigate>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/restaurants" element={<RestaurantsScreen />}></Route>
      <Route path="/restaurants/:id" element={<Restaurant />}></Route>
      <Route path="/reviews" element={<Reviews />}></Route>
      <Route path="*" element={<Navigate replace to="/restaurants"></Navigate>}></Route>
    </Routes>
  </BrowserRouter>)
}

export default Router;