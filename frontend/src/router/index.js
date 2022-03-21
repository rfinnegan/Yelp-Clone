import Restaurants from '../components/Restaurants'
import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'

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
      <Route path="/" element={<Navigate replace to="/restaurants"></Navigate>}></Route>
      <Route path="/restaurants" element={<Restaurants />}></Route>
      <Route path="/restaurants/:id" element={<Restaurant />}></Route>
      <Route path="/reviews" element={<Reviews />}></Route>
      <Route path="*" element={<Navigate replace to="/restaurants"></Navigate>}></Route>
    </Routes>
  </BrowserRouter>)
}

export default Router;