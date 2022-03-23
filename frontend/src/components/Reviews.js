import actions from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const { initializeReviews } = actions

const Reviews = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const initialize = async () => {
      const initialReviews = await initializeReviews()
      dispatch(initialReviews)
    }
    initialize()
  }, [dispatch])

  const state = useSelector(state => state)
  const reviews = state.reviews

  return (
    <div>
      <h1>reviews</h1>
      {reviews.map(review => 
        <div key={review.review_id}>
          <div>
            {review.review_text}
            {review.rating}
          </div>
        </div>
        )}
    </div>
  )
}

export default Reviews;