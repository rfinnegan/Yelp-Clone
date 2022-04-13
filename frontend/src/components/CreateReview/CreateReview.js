import { useDispatch } from 'react-redux'
import actions from '../../store/actions'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './CreateReview.css'

const { createNewReview } = actions

const CreateReview = () => {
  const [rating, setRating] = useState(false)
  const onRatingChange = (event) => {
    setRating(event.target.value)
  }

  const [reviewText, setReviewText] = useState('')
  const onReviewTextChange = (event) => {
    setReviewText(event.target.value)
  }

  const params = useParams()
  const restaurant_id = params.id

  const dispatch = useDispatch();
  const addReview = async (event) => {
    const review_text = event.target.review.value
    const user_id = null;
    const review = { review_text, rating, user_id, restaurant_id }
    event.target.value = ''
    event.preventDefault()
    console.log(review)

    const newReview = await createNewReview(review)
    dispatch(newReview)
    setReviewText('')
  }

  return (
    <div>
      <form onSubmit={addReview}>
        <div className="new-review-container">
          <div className="rating-container">
            <label htmlFor="rating">Rating</label>

            <input type="radio" id="1" name="rating" value="1" onChange={onRatingChange}></input>
            <label htmlFor="1">1</label>

            <input type="radio" id="2" name="rating" value="2" onChange={onRatingChange} ></input>
            <label htmlFor="2">2</label>

            <input type="radio" id="3" name="rating" value="3" onChange={onRatingChange}></input>
            <label htmlFor="3">3</label>

            <input type="radio" id="4" name="rating" value="4" onChange={onRatingChange}></input>
            <label htmlFor="4">4</label>

            <input type="radio" id="5" name="rating" value="5" onChange={onRatingChange}></input>
            <label htmlFor="5">5</label>
          </div>

          <div className="create-review-textarea-container">
            <label htmlFor="review"></label>
            <textarea onChange={onReviewTextChange} value={reviewText} name="review" id="review" placeholder="Leave a review" />
          </div>

          <button className="add-review-button" type="submit">Post Review</button>
        </div>
      </form>
    </div>
  )
}

export default CreateReview