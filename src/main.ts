import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VuePapaParse from 'vue-papa-parse'
// import {VueCsvImportPlugin} from "vue-csv-import";

createApp(App).mount('#app')

App.use(VuePapaParse)
// App.use(VueCsvImportPlugin)
