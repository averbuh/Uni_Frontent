<script setup>
import RecipeItem from './RecipeItem.vue'
import { ref } from 'vue'
import axios from 'axios'
import { onMounted } from 'vue';

const recipes = ref([])

onMounted( async () => {
  const response = await axios.get('http://localhost:3000/recipes')
  recipes.value = response.data
})

</script>

<template>
  <transition-group name="fade" tag="ul" class="recipes_list">
      <recipe-item v-for="recipe in recipes"
        :recipe="recipe"
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
  padding: 10px 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: white;
  margin-top: 30px;

}


#add-recipe {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
  float: right;
}
</style>
