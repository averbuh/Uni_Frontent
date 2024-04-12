<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ServiceSelector from './components/ServiceSelector.vue'
import { ref, onMounted } from 'vue';
import { onUpdated } from 'vue';


//default component
let activeComp = ref('restaurant');

function changeComp(value) {
  console.log(value);
  activeComp.value = value
}

// lifecycle hooks
onMounted(() => {
  console.log(activeComp.value);
})


onUpdated(() => {
  console.log('button click');
})


</script>

<template>
  <div>
    <!-- <div>hello w</div> -->
    <h1>{{ activeComp }}</h1>
  </div>
  <div class="service-selector">
    <!-- <ServiceSelector :activeComp="activeComp" /> -->
    <button @click="changeComp('recipes')">Change</button>
  </div>
  <div>
    <component :is="activeComp"></component>
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">

      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <!-- <main>
    <TheWelcome />
  </main> -->
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
