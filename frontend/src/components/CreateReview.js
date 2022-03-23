import { useDispatch } from 'react-redux'
import actions from '../store/actions'

const { createNewReview } = actions

const CreateReview = () => {
  const dispatch = useDispatch;
  const addReview = async (event) => {
    debugger
    const review = event.target.review.value
    event.target.value = ''
    event.preventDefault()
    console.log(review)
    const newReview = await createNewReview(review)
    dispatch(newReview)
  }

  return(
    <div>
      <form onSubmit={addReview}>
        <div>
          <label htmlFor="rating">Rating</label>

          <input type="radio" id="1" name="1" value="1"></input>
          <label htmlFor="1">1</label>

          <input type="radio" id="2" name="2" value="2"></input>
          <label htmlFor="2">2</label>

          <input type="radio" id="3" name="3" value="3"></input>
          <label htmlFor="3">3</label>

          <input type="radio" id="4" name="4" value="4"></input>
          <label htmlFor="4">4</label>

          <input type="radio" id="5" name="5" value="5"></input>
          <label htmlFor="5">5</label>

          <div>
            <label htmlFor="review">Leave a Review</label>
            <input name="review" id="review" placeholder="Review"/>
          </div>

          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default CreateReview