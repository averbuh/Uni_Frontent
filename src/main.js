import './assets/main.css'

import { router } from './router.js'
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-blue/theme.css';
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
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';





import Recipes from './components/recipes/Recipes.vue';
import Restaurant from './components/restaurant/Restaurant.vue';
import Suppliers from './components/suppliers/Suppliers.vue';


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
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('Textarea', Textarea)
app.component('Checkbox', Checkbox)
app.component('Dialog', Dialog)
app.use(PrimeVue)


app.component('recipes', Recipes)
app.component('restaurant', Restaurant)
app.component('suppliers', Suppliers)


app.mount('#app')



