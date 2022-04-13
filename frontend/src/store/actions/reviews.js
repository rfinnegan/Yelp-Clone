import service from '../../services/index'
import models from '../../models'

const { Review } = models

export const initializeReviews = async () => {
  const reviews = await service.getReviews()
  return {
    type: 'INIT_REVIEWS',
    data: reviews
  }
}

export const getReviewsForRestaurant = async (id) => {
  const reviewByRestId = await service.getReviewsByRestaurantId(id)
  return {
    type: 'REVIEWS_RESTAURANT',
    data: reviewByRestId
  }
}

export const createNewReview = async (review) => {
  const newReview = await service.createReview(review)
  return {
    type: 'ADD_REVIEW',
    data: newReview
  }
}