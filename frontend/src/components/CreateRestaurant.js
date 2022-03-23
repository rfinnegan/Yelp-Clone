import { useDispatch } from 'react-redux'
import actions from '../store/actions'

const { createNewRestaurant } = actions

const CreateRestaurant = () => {
  const dispatch = useDispatch;
  const addRestaurant = async (event) => {
    const name = event.target.name.value
    const address = event.target.address.value
    const city = event.target.city.value
    const state = event.target.state.value
    const zip = event.target.zip.value
    const phone = event.target.phone.value
    const restaurant = { name, address, city, state, zip, phone }
    event.target.value = ''
    event.preventDefault()
    const newRestaurant = await createNewRestaurant(restaurant)
    dispatch(newRestaurant)
  }

  return (
    <div>
      <h2>Add a New Restaurant</h2>
      <form onSubmit={addRestaurant}>
        <div className="add-new-container">
          <label htmlFor="name">Restaurant Name</label>
          <input name="name" id="name" placeholder="Name"/>

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