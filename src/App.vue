<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ServiceSelector from './components/ServiceSelector.vue'


//default component
let activeComp = 'restaurant'

function changeComp(value){
  activeComp = value
}
</script>

<template>

  <div class="service-selector">
    <ServiceSelector :activeComp="activeComp" />
    <button @click="changeCop('recipes')">Welcome</button>
  </div>
  <div>
    <component :is="activeComp"></component>
  </div>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
    
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.service-selector {
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
