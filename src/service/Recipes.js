import axios from 'axios'

const url = 'http://localhost:8080'
export const Recipes = {
  async getRecipesData() {
    const response = await axios.get(url + '/recipes')
    return response.data
  },

  async addRecipe(recipe) {
    const response = await axios.post(url + '/recipes', recipe)
    return response
  },

  async deleteRecipe(name) {
    const response = await axios.delete(url + `/recipes/${name}`)
    return response
  },

  async updateRecipe(name, recipe) {
    const response = await axios.put(url + `/recipes/${name}`, recipe)
    return response
  },

  getRecipes() {
    return Promise.resolve(this.getRecipesData())
  },

  getTodayRecipes() {
    return Promise.resolve(
      this.getRecipesData().then((recipes) => recipes.filter((recipe) => recipe.istoday === true))
    )
  },

  async getImageUrl(image) {
    const response = await axios.get(url + `/recipes/image/${image}`)
    return response.data
  }
}
