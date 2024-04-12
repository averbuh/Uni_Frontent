import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primeicons/primeicons.css';
import Button from "primevue/button";

import Recipes from './components/Recipes.vue';
import Restaurant from './components/Restaurant.vue';
import Suppliers from './components/Suppliers.vue';

const app = createApp(App);
app.component('Button', Button);
app.use(PrimeVue)


app.component('recipes', Recipes)
app.component('restaurant', Restaurant)
app.component('suppliers', Suppliers)


app.mount('#app')



