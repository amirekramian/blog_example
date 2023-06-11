import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from '/node_modules/axios';


createApp(App)
.use(router)
.component('axios', axios)
.mount('#app')
