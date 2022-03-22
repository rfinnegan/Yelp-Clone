import { useDispatch } from 'react-redux'
import actions from '../store/actions'

const { createNewReview } = actions

const CreateReview = () => {
  const dispatch = useDispatch;
  const addReview = async (event) => {
    const text = event.target.text.value
    event.target.value = ''
    event.preventDefault()
    const newReview = await createNewReview(text)
    dispatch(newReview)
  }

  return(
    <div>
      <form onSubmit={addReview}>
        <div>
          <label for="review">Leave a Review</label>
          <input name="review" id="review" placeholder="Review"/>

          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default CreateReview