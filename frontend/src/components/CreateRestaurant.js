import { useDispatch } from 'react-redux'
import { createNewRestaurant } from '../store/actions/restaurants'

const CreateRestaurant = () => {
  const dispatch = useDispatch;
  const addRestaurant = async (event) => {
    const name = event.target.name.value
    const address = event.target.address.value

    const restaurant = { name, address, }
    event.target.value = ''
    event.preventDefault()
    const newRestaurant = await createNewRestaurant(restaurant)
    dispatch(newRestaurant)
  }

  return (
    <div>
      <h2>Add a New Restaurant</h2>
      <form onSubmit={addRestaurant}>
        <div class="add-new-container">
          <label for="name">Restaurant Name</label>
          <input name="name" id="name" placeholder="Name"/>

          <label for="address">Address</label>
          <input name="address" id="address" placeholder="Address"/>

          <label for="city">City</label>
          <input name="city" id="city" placeholder="City"/>

          <label for="state">State</label>
          <input name="state" id="state" placeholder="State"/>

          <label for="zip">Zip Code</label>
          <input name="zip" id="zip" placeholder="Zip Code"/>

          <label for="phone">Phone Number</label>
          <input name="phone" id="phone" placeholder="Phone Number"/>

          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default CreateRestaurant