const Restaurant = {
  create(data) {
    return {
      address: data.address,
      city: data.city,
      id: data.id,
      name: data.name,
      phone_number: data.phone_number,
      state: data.state,
      zip: data.zip
    }
  }
}

const Review = {
  create(data) {
    return {
      rating: data.rating,
      restaurant_id: data.restaurantId,
      review_text: data.text
    }
  }
}

const models = { Restaurant, Review }

export default models