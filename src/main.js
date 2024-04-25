import "./styles.css"
import { createApp } from 'vue'

import App from './app.vue'
import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './styles.css'


//Add PrimeVue Components
import Card         from 'primevue/card';
import Button       from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Toolbar      from 'primevue/toolbar';

createApp(app)
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-toolbar', Toolbar)

    .mount('#app')

import app from './app.vue'

