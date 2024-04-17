<script setup>
defineProps({
  recipe: Object

})
</script>

<template id="recipe-item">
    <li class="recipe_item">
      <h1>{{ recipe.name }}</h1>
      <h2> Ingredients: </h2>
      <ol>
        <li v-for="ingredient in recipe.ingredients" >{{ ingredient.name }}</li>
      </ol>
    </li>
</template>

<style scoped>
.recipe_item {
  font-size: 10px;
  border: 3px solid #73AD21;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  list-style-type: none;
  flex-direction: column;
  align-items: center;
  display:list-item;
  margin: 10px 10px;
  line-height: 20px;


ul {
  list-style-type:square;    
  line-height: 20px;

}
}
</style>
