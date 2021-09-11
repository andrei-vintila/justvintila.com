import { createApp } from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
const publicWebApp = createApp(App)
publicWebApp.use(VueTypedJs)
publicWebApp.mount('#app')


