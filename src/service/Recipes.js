import axios from 'axios'

export const Recipes = {
  async getRecipesData() {
    const response = await axios.get('http://localhost:3000/recipes')
    return response.data
  },

  async addRecipe(recipe) {
    const response = await axios.post('http://localhost:3000/recipes', recipe)
    return response
  },

  async deleteRecipe(id) {
    const response = await axios.delete(`http://localhost:3000/recipes/${id}`)
    return response
  },

  async updateRecipe(id, recipe) {
    const response = await axios.put(`http://localhost:3000/recipes/${id}`, recipe)
    return response
  },

  getRecipes() {
    return Promise.resolve(this.getRecipesData());
  },

  getTodayRecipes() {
    return Promise.resolve(this.getRecipesData().then(recipes => recipes.filter(recipe => recipe.istoday === true)));
  }
}
