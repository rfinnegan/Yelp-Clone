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

export default { Restaurant }