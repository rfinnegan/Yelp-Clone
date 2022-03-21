import service from '../../services/index'

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