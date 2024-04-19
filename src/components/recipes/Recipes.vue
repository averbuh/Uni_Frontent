<script setup>
import RecipeItem from './RecipeItem.vue'
import { watch, ref, onMounted, onUpdated } from 'vue'
import { Recipes } from '@/service/Recipes'
import axios from 'axios'

const recipes = ref([])

onMounted(() => {
  Recipes.getRecipes().then((data) => recipes.value = data);
})

onUpdated(() => {
  console.log("updated");
  console.log(selections.value);

})

const status = ref(null);
const name = ref(null);
const ingredients_list = ref([]);
const ingredient = ref(null);
const selections = ref([]);


function addIngredient() {
  ingredients_list.value.push(ingredient.value);
  ingredient.value = "";
}


watch(recipes, async (newVal, oldVal) => {
  if (newVal.length == 0) {
    try {
      await Recipes.getRecipes().then((data) => recipes.value = data);
    }
    catch (error) {
      console.log('Cannot get recipes' + error);
    }
  }

});



function addRecipe() {
  console.log(name.value);
  const data = {
    "name": name.value,
    "istoday": false,
    "ingredients": ingredients_list.value
  }
  Recipes.addRecipe(data).then((status) => status.value = status);
  ingredients_list.value = [];
  name.value = "";
  setTimeout(() => {
    Recipes.getRecipes().then((data) => recipes.value = data);
  }, 200);
}


function deleteRecipe() {
  for (const id of selections.value) {
    setTimeout(() => {
      Recipes.deleteRecipe(id).then((status) => status.value = status);
    })
  }
  selections.value = [];
  setTimeout(() => {
    Recipes.getRecipes().then((data) => recipes.value = data);
  }, 200);
}

const handleSelection = (id, selected) => {
  if (selected) {
    selections.value.push(id);
  }
};

</script>


<template>
  <transition-group name="fade" tag="ul" class="recipes_list">
    <li v-for="recipe in recipes" :key="recipe">
      <recipe-item v-on:change="handleSelection" :recipe="recipe" />
    </li>
  </transition-group>

  <Button id="delete-recipe" label="Delete" icon="pi pi-trash" @click="deleteRecipe()" />

  <div class="add-recipe">
    <label for="name">Recipe's Name</label>
    <InputText id="name" v-model="name" />
    <br>
    <label for="ingredients">Recipe's Ingredients</label>
    <InputText id="ingredient" v-model="ingredient" @keyup.enter="addIngredient" />
    {{ ingredients_list }}

    <Button id="add-ingredient" label="Add Ingredient" icon="pi pi-plus" @click="addIngredient" />
    <Button id="add-recipe" label="Add Recipe" icon="pi pi-plus" @click="addRecipe" />
  </div>

</template>

<style scoped>
.recipes-top {
  margin-top: 15px;
  margin-bottom: 15px;
}

h1 {
  text-align: center;
}

.add-recipe {
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  float: right;

  #ingredient {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.recipes_list {
  list-style-type: none;
  flex-direction: column;
  align-items: center;
  display: list-item;
  margin: 10px 10px;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: white;
  margin-top: 30px;

}

#delete-recipe {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
  float: right;
}

#add-recipe {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
}

#add-ingredient {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
