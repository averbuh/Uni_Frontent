import axios from 'axios'

export const Restaurant = {
  async getRestaurantsData() {
    const response = await axios.get('http://localhost:3000/restourant')
    return response.data
  },

  getRestaurants() {
    return Promise.resolve(this.getRestaurantsData());
  }
}
