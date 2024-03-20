import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VuePapaParse from 'vue-papa-parse'

createApp(App).mount('#app')

App.use(VuePapaParse)
// App.use(VueCsvImportPlugin)
// import {VueCsvImportPlugin} from "vue-csv-import";
