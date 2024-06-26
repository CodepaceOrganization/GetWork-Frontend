import { createApp } from 'vue'
import '/src/style.css'
import App from './app.vue'

// Import router
import router from "./router/index.js";

// PrimeVue
import PrimeVue from 'primevue/config';

// PrimeVue CSS
import 'primeflex/primeflex.css';

// PrimeVue Icons
import 'primeicons/primeicons.css';

// PrimeVue Material Design Theme
import 'primevue/resources/themes/mdc-light-indigo/theme.css';

// PrimeVue Services
import ToastService         from 'primevue/toastservice';
import ConfirmationService  from "primevue/confirmationservice";
import DialogService        from "primevue/dialogservice";
import i18n from "./i18n.js";

// PrimeVue Components
import DataTable        from "primevue/datatable";
import Calendar from 'primevue/calendar';
import Column           from "primevue/column";
import ConfirmDialog    from "primevue/confirmdialog";
import Row              from "primevue/row";
import Toolbar          from "primevue/toolbar";
import InputText        from "primevue/inputtext";
import Textarea         from "primevue/textarea";
import Button           from "primevue/button";
import SelectButton from 'primevue/selectbutton';
import Sidebar          from "primevue/sidebar";
import Menu             from "primevue/menu";
import Dialog           from "primevue/dialog";
import Toast            from "primevue/toast";
import Dropdown         from "primevue/dropdown";
import Tag              from "primevue/tag";
import Card             from "primevue/card";
import FileUpload       from "primevue/fileupload";
import IconField        from "primevue/iconfield";
import InputIcon        from "primevue/inputicon";
import InputNumber      from "primevue/inputnumber";
import FloatLabel       from "primevue/floatlabel";
import Checkbox         from "primevue/checkbox";
import Rating           from "primevue/rating";
import Avatar       from 'primevue/avatar';
import Password from "primevue/password";
import {createPinia} from "pinia";

const pinia = createPinia();
createApp(App)
    .use(router)
    .use(pinia)
    .use(PrimeVue, { ripple: true })
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .use(i18n)
    .component('pv-button',         Button)
    .component('pv-select-button',  SelectButton)
    .component('pv-card',           Card)
    .component('pv-column',         Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox',       Checkbox)
    .component('pv-data-table',     DataTable)
    .component('pv-dialog',         Dialog)
    .component('pv-dropdown',       Dropdown)
    .component('pv-file-upload',    FileUpload)
    .component('pv-float-label',    FloatLabel)
    .component('pv-icon-field',     IconField)
    .component('pv-input-icon',     InputIcon)
    .component('pv-input-text',     InputText)
    .component('pv-input-number',   InputNumber)
    .component('pv-menu',           Menu)
    .component('pv-avatar', Avatar)
    .component('pv-rating',         Rating)
    .component('pv-row',            Row)
    .component('pv-sidebar',        Sidebar)
    .component('pv-tag',            Tag)
    .component('pv-button',         Button)
    .component('pv-textarea',       Textarea)
    .component('pv-toolbar',        Toolbar)
    .component('pv-toast',          Toast)
    .component('pv-calendar', Calendar)
    .component('pv-password', Password)
    .mount('#app');