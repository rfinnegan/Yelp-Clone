import { useDispatch } from 'react-redux'
import actions from '../../store/actions'
import './CreateRestaurant.css'

const { createNewRestaurant } = actions

const CreateRestaurant = () => {
  const dispatch = useDispatch();
  const addRestaurant = async (event) => {
    const restaurant_name = event.target.name.value
    const address = event.target.address.value
    const city = event.target.city.value
    const state = event.target.state.value
    const zip = event.target.zip.value
    const phone_number = event.target.phone.value
    const restaurant = { restaurant_name, address, city, state, zip, phone_number }
    event.target.value = ''
    event.preventDefault()
    console.log(restaurant)
    const newRestaurant = await createNewRestaurant(restaurant)
    dispatch(newRestaurant)
  }

  return (
    <div className="add-container">
      <div className="add-container-text">
      <h2>Add a New Restaurant</h2>
      </div>
      <form className="add-container-form" onSubmit={addRestaurant}>
        <div className="add-input-container">
          <label htmlFor="name">Restaurant Name</label>
          <input name="name" id="restaurant" placeholder="Name"/>

          <label htmlFor="address">Address</label>
          <input name="address" id="address" placeholder="Address"/>

          <label htmlFor="city">City</label>
          <input name="city" id="city" placeholder="City"/>

          <label htmlFor="state">State</label>
          <input name="state" id="state" placeholder="State"/>

          <label htmlFor="zip">Zip Code</label>
          <input name="zip" id="zip" placeholder="Zip Code"/>

          <label htmlFor="phone">Phone Number</label>
          <input name="phone" id="phone" placeholder="Phone Number"/>

          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default CreateRestaurant