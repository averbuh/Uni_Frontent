import axios from 'axios'

export const Recipes = {
  async getRecipesData() {
    const response = await axios.get('http://localhost:3000/recipes')
    return response.data
  },

  getRecipes() {
    return Promise.resolve(this.getRecipesData());
  },

  getTodayRecipes() {
    return Promise.resolve(this.getRecipesData().then(recipes => recipes.filter(recipe => recipe.istoday === true)));
  }
}
