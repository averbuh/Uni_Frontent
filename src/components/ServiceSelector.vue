<script setup>
defineProps({
  activeComp: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="service-selector">
    <Button label="Recipes" icon="pi pi-apple" @click="activeComp = 'recipes'"/>
    <Button @click="activeComp = 'restaurant'" label="Restourant" icon="pi pi-briefcase" aria-label="Restourant"/>
    <Button @click="activeComp = 'suppliers'" label="Suppliers" icon="pi pi-truck" aria-label="Suppliers"/>
  </div>
</template>

<style scoped>
.service-selector {
  Button {
    margin: 10px;
  }

}
</style>
