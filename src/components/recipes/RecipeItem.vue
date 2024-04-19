<script setup>
import { Recipes } from '@/service/Recipes'
import { ref, onMounted, onUpdated } from 'vue'
defineProps({
  recipe: Object,
})

const emits = defineEmits(['change']);

const visible = ref(false);

const selected = ref(false);









</script>

<template id="recipe-item">
  <li class="recipe_item">
    <h1>{{ recipe.name }}</h1>
    <h2> Ingredients: </h2>
    <ol>
      <li v-for="ingredient in recipe.ingredients">{{ ingredient }}</li>
    </ol>
    <!-- <input type="checkbox" id="checkbox" v-model="checked" /> -->
  </li>
  <label id="select_label" for="select">Select</label>
  <label id="today_label" for="checkbox">Today</label>
  <br>
  <Checkbox id="select" v-model="selected" :binary="true" @change="$emit('change', recipe.id, selected)" />
  <Checkbox id="today" v-model="recipe.istoday" :binary="true" @change="Recipes.updateRecipe(recipe.id, recipe)" />
  <Button label="Edit" icon="pi pi-pencil" @click="visible = true" />



  <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Update your information.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <label for="name" class="font-semibold w-6rem">Name</label>
      <InputText id="name" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
      <label for="ingredients" class="font-semibold w-6rem">Ingredients</label>
      <InputText id="ingredients" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
      <Button type="button" label="Add Ingredient" @click="visible = false"></Button>
      <Button type="button" label="Delete Ingredient" @click="visible = false"></Button>
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Save" @click="visible = false"></Button>
    </div>
  </Dialog>

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
  display: list-item;
  margin: 10px 10px;
  line-height: 20px;


  ul {
    list-style-type: square;
    line-height: 20px;

  }
}

#today {
  margin-left: 10px;
  margin-right: 10px;
}

#select {
  margin-left: 10px;
  margin-right: 10px;
}


#select_label {
  margin-left: 6px;
  margin-right: 12px;
}

Button {

  margin-left: 10px;
  margin-right: 10px;
  padding: 3px;
  font-size: 15px;
  width: 100px;



}
</style>
