import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {appAxios} from '@/utils/axios';
import {config, plugin} from '@/plugins/formKit'
import i18n from './plugins/i18n';
import App from '@/App.vue'
import router from './router'
import Swal from '@/plugins/sweetAlert';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'swiper/css';
import '@formkit/themes/genesis'


const app = createApp(App)
const pinia = createPinia()
app.config.globalProperties.$appAxios =appAxios 
app.use(pinia)
app.use(plugin, config);
app.use(router)
app.provide('Swal',Swal)
app.use(i18n)
app.mount('#app')
