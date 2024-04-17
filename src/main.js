import './assets/main.css'

import { router } from './router.js'
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import Rating from 'primevue/rating';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'   // optional
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Tag from 'primevue/tag';
import DataTable from 'primevue/datatable';



import Recipes from './components/Recipes.vue';
import Restaurant from './components/Restaurant.vue';
import Suppliers from './components/Suppliers.vue';


const app = createApp(App);

app.use(router)

app.component('Button', Button);
app.component('Rating', Rating)
app.component('DataView', DataView)
app.component('DataViewLayoutOptions', DataViewLayoutOptions)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('Tag', Tag)
app.component('DataTable', DataTable)
app.use(PrimeVue)


app.component('recipes', Recipes)
app.component('restaurant', Restaurant)
app.component('suppliers', Suppliers)


app.mount('#app')



