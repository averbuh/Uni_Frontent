<script setup>
import RecipeItem from './RecipeItem.vue'
import { ref } from 'vue'

const recipes = ref([
  'Meat',
  'Shit',
  'Fish',
])
</script>

<template>
  <div class="recipes-top">
    <h1>Recipes</h1>
  </div>
  <transition-group name="fade" tag="ul" class="recipes_list">
      <recipe-item v-for="(recipe, index) in recipes"
                 @remove="removeTask(index)"
                 @complete="completeTask(recipe)"
                 :task="recipe"

                 :key="recipe"
      ></recipe-item>
  </transition-group>

  <Button id="add-recipe" icon="pi pi-plus" @click="addTask" />
</template>

<style scoped>
.recipes-top {
  margin-top: 15px;
  margin-bottom: 15px;
}
h1 {
  text-align: center;
}


.recipes_list{
  list-style-type: none;
  flex-direction: column;
  align-items: center;
  display:list-item;
  margin: 10px 10px;

}


#add-recipe {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
  float: right;
}
</style>
